import { IDatabase } from "../i_database";

export class FirebaseDatabase implements IDatabase{

    async create(data: object): Promise<void> {
        console.log('create FirebaseDatabase implementing IDatabase:', data );
    }

    async read(id: string): Promise<object>{
        console.log('read FirebaseDatabase implementing IDatabase id:', id);

        return {id};
    }

    async update(data: object, id: string): Promise<void>{
        console.log('update FirebaseDatabase implementing IDatabase, data:', data, ' id:', id);
    }

    async delete(id: string): Promise<void>{
        console.log('delete FirebaseDatabase implementing IDatabase id:', id);
    }

}
