import { FirebaseDatabase } from "./v1/firebase_database_v1";
import { FirebaseDatabase as FirebaseDatabaseV2 } from "./v2_with_auditing/firebase_database_with_auditing";

export class ControllerWithFirebaseDatabase{

    // Done to simulate being the same class in different times
    constructor(private firebaseDatabase: FirebaseDatabase|FirebaseDatabaseV2){}
    
    async call(): Promise<void>{
        console.log('En el controlador que SOLO recibe FirebaseDatabase');
        await this.firebaseDatabase.create({id: "1", name: "Facundo"});
        const user1 = await this.firebaseDatabase.read("1");
        await this.firebaseDatabase.update({name: "Roberto"}, "1");
        await this.firebaseDatabase.delete("1");
    }

}