import { ControllerWithFirebaseDatabase } from "./common_interface/controller_firebase_database";
import { ControllerWithLocalDatabase } from "./common_interface/controller_local_database";
import { FirebaseDatabase } from "./common_interface/v1/firebase_database";
import { LocalDatabase } from "./common_interface/v1/local_database";
import { DatabaseAuditingDecorator } from "./common_interface/v2_with_auditing/database_auditing_decorator";

const firebaseDatabase = new FirebaseDatabase();
const localDatabase = new LocalDatabase();

const controllerWithFirebaseDatabase = new ControllerWithFirebaseDatabase(firebaseDatabase);
const controllerWithLocalDatabase = new ControllerWithLocalDatabase(localDatabase);

Promise.all([controllerWithFirebaseDatabase.call(), controllerWithLocalDatabase.call()]).then(_ => console.log('Finished'));

const auditingFirebaseDatabase = new DatabaseAuditingDecorator(firebaseDatabase);
const auditingLocalDatabase = new DatabaseAuditingDecorator(auditingFirebaseDatabase);

const controllerWithFirebaseDatabaseWithAuditing = new ControllerWithFirebaseDatabase(auditingFirebaseDatabase);
const controllerWithLocalDatabaseWithAuditing = new ControllerWithLocalDatabase(auditingLocalDatabase);

Promise.all([controllerWithFirebaseDatabaseWithAuditing.call(), controllerWithLocalDatabaseWithAuditing.call()]).then(_ => console.log('Finished'));