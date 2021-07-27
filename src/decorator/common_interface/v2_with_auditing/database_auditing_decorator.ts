import { IDatabase } from "../i_database";

export class DatabaseAuditingDecorator implements IDatabase{

    constructor(private decoratedDatabase: IDatabase){}

    create(data: object): Promise<void> {
        console.log('AUDITING create decorated IDatabase');
        return this.decoratedDatabase.create(data);
    }
    read(id: string): Promise<object> {
        // Just pass through without decorating call
        return this.decoratedDatabase.read(id);
    }
    update(data: object, id: string): Promise<void> {
        console.log('AUDITING update decorated IDatabase');
        return this.decoratedDatabase.update(data, id);
    }
    delete(id: string): Promise<void> {
        console.log('AUDITING delete decorated IDatabase');
        return this.decoratedDatabase.delete(id);
    }
    
}