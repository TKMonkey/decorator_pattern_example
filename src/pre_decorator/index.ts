import { ControllerWithFirebaseDatabase } from "./no_common_interface/controller_firebase_database";
import { ControllerWithLocalDatabase } from "./no_common_interface/controller_local_database";
import { ControllerWithFirebaseDatabase as ControllerWithFirebaseDatabaseV2 } from "./common_interface/controller_firebase_database";
import { ControllerWithLocalDatabase as ControllerWithLocalDatabaseV2 } from "./common_interface/controller_local_database";
import { FirebaseDatabase } from "./no_common_interface/v1/firebase_database_v1";
import { LocalDatabase } from "./no_common_interface/v1/local_database_v1";
import { FirebaseDatabase as FirebaseDatabaseWithAuditing} from "./no_common_interface/v2_with_auditing/firebase_database_with_auditing";
import { LocalDatabase as LocalDatabaseWithAuditing } from "./no_common_interface/v2_with_auditing/local_database_with_auditing";
import { FirebaseDatabase as FirebaseDatabaseV2} from "./common_interface/v1/firebase_database_v1";
import { LocalDatabase as LocalDatabaseV2 } from "./common_interface/v1/local_database_v1";
import { FirebaseDatabase as FirebaseDatabaseV2WithAuditing} from "./common_interface/v2_with_auditing/firebase_database_with_auditing";
import { LocalDatabase as LocalDatabaseV2WithAuditing } from "./common_interface/v2_with_auditing/local_database_with_auditing";

const firebaseController = new ControllerWithFirebaseDatabase(new FirebaseDatabase());
const localController = new ControllerWithLocalDatabase(new LocalDatabase());

Promise.all([firebaseController.call(), localController.call()]).then( _ => console.log('Finished'));

const firebaseControllerWithAuditing = new ControllerWithFirebaseDatabase(new FirebaseDatabaseWithAuditing());
const localControllerWithAuditing = new ControllerWithLocalDatabase(new LocalDatabaseWithAuditing());

Promise.all([firebaseControllerWithAuditing.call(), localControllerWithAuditing.call()]).then( _ => console.log('Finished'));

const firebaseControllerV2 = new ControllerWithFirebaseDatabaseV2(new FirebaseDatabaseV2());
const localControllerV2 = new ControllerWithLocalDatabaseV2(new LocalDatabaseV2());

Promise.all([firebaseControllerV2.call(), localControllerV2.call()]).then( _ => console.log('Finished'));

const firebaseControllerV2WithAuditing = new ControllerWithFirebaseDatabaseV2(new FirebaseDatabaseV2WithAuditing());
const localControllerV2WithAuditing = new ControllerWithLocalDatabaseV2(new LocalDatabaseV2WithAuditing());

Promise.all([firebaseControllerV2WithAuditing.call(), localControllerV2WithAuditing.call()]).then( _ => console.log('Finished'));