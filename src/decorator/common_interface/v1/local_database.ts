import { IDatabase } from "../i_database";

export class LocalDatabase implements IDatabase{

    async create(data: object): Promise<void> {
        console.log('create LocalDatabase implementing IDatabase with Decorator:', data );
    }

    async read(id: string): Promise<object>{
        console.log('read LocalDatabase implementing IDatabase with Decorator id:', id);

        return {id};
    }

    async update(data: object, id: string): Promise<void>{
        console.log('update LocalDatabase implementing IDatabase with Decorator, data:', data, ' id:', id);
    }

    async delete(id: string): Promise<void>{
        console.log('delete LocalDatabase implementing IDatabase with Decorator id:', id);
    }

}