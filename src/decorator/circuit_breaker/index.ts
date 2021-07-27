import { CircuitBreakerDatabaseDecorator } from "./circuit_breaker_database_decorator";
import {CustomeErrorFirebaseDatabase} from './custom_error_firebase_database';

const firebaseDatabase = new CustomeErrorFirebaseDatabase();
const circuitBreakerDatabase = new CircuitBreakerDatabaseDecorator(firebaseDatabase);

async function testCircuitBreaker(){

    firebaseDatabase.toggleShouldThrowInRead();

    let initialTime = Date.now();

    try{
        const result = await circuitBreakerDatabase.read("1");
        console.log(`El resultado del primer llamado es: ${result}`)
    }catch(err){
        console.log(`Falla el primer llamado con error: ${err}`)
    }finally{
        console.log(`El tiempo que se tomó el primer llamado es: ${Date.now() - initialTime}\n\n`)
    }
    
    initialTime = Date.now();

    try{
        const result = await circuitBreakerDatabase.read("1");
        console.log(`El resultado del segundo llamado es: ${result}`)
    }catch(err){
        console.log(`Falla el segundo llamado con error: ${err}`)
    }finally{
        console.log(`El tiempo que se tomó el segundo llamado es: ${Date.now() - initialTime}\n\n`)
    }

    initialTime = Date.now();

    try{
        const result = await circuitBreakerDatabase.read("1");
        console.log(`El resultado del tercer llamado es: ${result}`)
    }catch(err){
        console.log(`Falla el tercer llamado con error: ${err}`)
    }finally{
        console.log(`El tiempo que se tomó el tercer llamado es: ${Date.now() - initialTime}\n\n`)
    }

    initialTime = Date.now();

    try{
        const result = await circuitBreakerDatabase.read("1");
        console.log(`El resultado del cuarto llamado es: ${result}`)
    }catch(err){
        console.log(`Falla el cuarto llamado con error: ${err}`)
    }finally{
        console.log(`El tiempo que se tomó el cuarto llamado es: ${Date.now() - initialTime}\n\n`)
    }

    initialTime = Date.now();
    try{
        const result = await circuitBreakerDatabase.read("1");
        console.log(`El resultado del quinto llamado es: ${result}`)
    }catch(err){
        console.log(`Falla el quinto llamado con error: ${err}`)
    }finally{
        console.log(`El tiempo que se tomó el quinto llamado es: ${Date.now() - initialTime}\n\n`)
    }

    firebaseDatabase.toggleShouldThrowInRead();

    
    setTimeout(async () => {
        try{
            initialTime = Date.now();
            const result = await circuitBreakerDatabase.read("1");
            console.log(`El resultado del sexto llamado es: ${result}`)
        }catch(err){
            console.log(`Falla el sexto llamado con error: ${err}`)
        }finally{
            console.log(`El tiempo que se tomó el sexto llamado es: ${Date.now() - initialTime}\n\n`)
        }

    }, 4000);

}
           

testCircuitBreaker().then(_ => "Finished circuitBreaker test");