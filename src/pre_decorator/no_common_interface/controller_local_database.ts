import { LocalDatabase } from "./v1/local_database_v1";
import { LocalDatabase as LocalDatabaseV2 } from "./v2_with_auditing/local_database_with_auditing";

export class ControllerWithLocalDatabase{

    // Done to simulate being the same class in different times
    constructor(private localDatabase: LocalDatabase|LocalDatabaseV2){}
    
    async call(): Promise<void>{
        console.log('En el controlador que SOLO recibe LocalDatabase');
        await this.localDatabase.create({id: "1", name: "Facundo"});
        const user1 = await this.localDatabase.read("1");
        await this.localDatabase.update({name: "Roberto"}, "1");
        await this.localDatabase.delete("1");

    }

}