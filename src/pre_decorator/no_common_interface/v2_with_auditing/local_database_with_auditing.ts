export class LocalDatabase{

    async create(data: object): Promise<void> {
        console.log('create LocalDatabase:', data );
    }

    async read(id: string): Promise<object>{
        console.log('read LocalDatabase id:', id);

        return {id};
    }

    async update(data: object, id: string): Promise<void>{
        console.log('update LocalDatabase, data:', data, ' id:', id);
    }

    async delete(id: string): Promise<void>{
        console.log('delete LocalDatabase id:', id);
    }

}
