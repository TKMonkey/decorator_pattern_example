import { IDatabase } from "../i_database";

export class FirebaseDatabase implements IDatabase{

    async create(data: object): Promise<void> {
        console.log('AUDITING create FirebaseDatabase implementing IDatabase');
        console.log('create FirebaseDatabase:', data );
    }

    async read(id: string): Promise<object>{
        console.log('read FirebaseDatabase id:', id);

        return {id};
    }

    async update(data: object, id: string): Promise<void>{
        console.log('AUDITING update FirebaseDatabase implementing IDatabase');
        console.log('update FirebaseDatabase, data:', data, ' id:', id);
    }

    async delete(id: string): Promise<void>{
        console.log('AUDITING delete FirebaseDatabase implementing IDatabase');
        console.log('delete FirebaseDatabase id:', id);
    }

}
