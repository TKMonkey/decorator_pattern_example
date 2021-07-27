import {IDatabase} from '../common_interface/i_database';

interface State{
    execute<T>(arg0: () => Promise<T>): Promise<T>;
    getNextState(): State;
}

class ClosedState implements State{
    private static readonly FAIL_THRESHOLD = 3;
    private counter = 0;
    private lastError?: Error;

    async execute<T>(arg0: () => Promise<T>): Promise<T> {
        try{
            const result = await arg0();
            this.counter = 0;
            return result;
        }catch(err){
            this.counter++;
            this.lastError = err;
            throw err;
        }
    }
    getNextState(): State {
        return (this.counter >= ClosedState.FAIL_THRESHOLD) ? new OpenState(this.lastError) : this;
    }

}

class OpenState implements State{

    private static readonly OPEN_TIMEOUT = 3 * 1000;
    private lastErrorTime = Date.now();

    constructor(private lastError?: Error){}

    execute<T>(arg0: () => Promise<T>): Promise<T> {
        if(this.timeoutPassed){
            this.lastErrorTime = 0;
            try{
                return arg0();
            }catch(error){
                this.lastError = error;
                this.lastErrorTime = Date.now();
            }
        }

        throw this.lastError;

    }

    getNextState(): State {
        if(this.timeoutPassed){
            return new HalfOpenState();
        }

        return this;
    }

    private get timeoutPassed(): boolean{
        return Date.now() - this.lastErrorTime >= OpenState.OPEN_TIMEOUT;
    }
}

class HalfOpenState implements State{
    private lastExecutionFailed: boolean = false;
    private lastError?: Error;

    async execute<T>(arg0: () => Promise<T>): Promise<T> {
        try{
            const result = await arg0();
            this.lastExecutionFailed = false;
            return result;
        }catch(error){
            this.lastExecutionFailed = true;
            this.lastError = error;
        }

        throw this.lastError;
    }
    getNextState(): State {
        return this.lastExecutionFailed ? new OpenState(this.lastError) : new ClosedState();
    }
}

export class CircuitBreakerDatabaseDecorator implements IDatabase{

    static readonly SECONDS_TO_WAIT_AFTER_ERROR = 60 * 1000;

    private currentState: State = new ClosedState();

    constructor(private decoratedDatabase: IDatabase){}

    create(data: object): Promise<void> {
        return this.wrapCall(() => this.decoratedDatabase.create(data));
    }
    read(id: string): Promise<object> {
        return this.wrapCall(() => this.decoratedDatabase.read(id));
    }
    update(data: object, id: string): Promise<void> {
        return this.wrapCall(() => this.update(data, id));
    }
    delete(id: string): Promise<void> {
        return this.wrapCall(() => this.delete(id));
    }

    private async wrapCall<T>(arg0: () => Promise<T>): Promise<T>{
        let lastError;
        let result: T;
        try{
            result = await this.currentState.execute(arg0);
        }catch(err){
            console.log(`Hubo un error ejecutando el llamado: ${err}`);
            lastError = err;
        }finally{
            this.currentState = this.currentState.getNextState();
        }

        if(!!lastError){
            throw lastError;
        }

        return result!;
    }
}

