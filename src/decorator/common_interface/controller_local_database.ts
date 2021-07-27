import { IDatabase } from "./i_database";

export class ControllerWithLocalDatabase{

    constructor(private database: IDatabase){

    }

    async call(): Promise<void>{
        console.log('En el controlador con decorador que recibe IDatabase Y le mandé LocalDatabase');
        await this.database.create({id: "1", name: "Facundo"});
        const user1 = await this.database.read("1");
        await this.database.update({name: "Roberto"}, "1");
        await this.database.delete("1");
    }

}