import {IDatabase} from '../common_interface/i_database';

export class CustomeErrorFirebaseDatabase implements IDatabase{

    private shouldThrowInRead = false;

    toggleShouldThrowInRead(){
        this.shouldThrowInRead = !this.shouldThrowInRead;
    }

    create(data: object): Promise<void> {
        throw new Error('Method not implemented.');
    }
    async read(id: string): Promise<object> {

        return new Promise((resolve, reject) => {
            setTimeout(() => {

                if(this.shouldThrowInRead){
                    reject(new Error("Un error inesperadísimo"));
                }
        
                resolve({id});

            }, 2000);

        });
    }
    update(data: object, id: string): Promise<void> {
        throw new Error('Method not implemented.');
    }
    delete(id: string): Promise<void> {
        throw new Error('Method not implemented.');
    }

}