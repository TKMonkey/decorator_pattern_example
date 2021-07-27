export class FirebaseDatabase{

    async create(data: object): Promise<void> {
        console.log('AUDITING create FirebaseDatabase');
        console.log('create FirebaseDatabase:', data );
    }

    async read(id: string): Promise<object>{
        console.log('read FirebaseDatabase id:', id);

        return {id};
    }

    async update(data: object, id: string): Promise<void>{
        console.log('AUDITING update FirebaseDatabase');
        console.log('update FirebaseDatabase, data:', data, ' id:', id);
    }

    async delete(id: string): Promise<void>{
        console.log('AUDITING delete FirebaseDatabase');
        console.log('delete FirebaseDatabase id:', id);
    }

}