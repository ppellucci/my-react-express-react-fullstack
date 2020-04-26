import { defaultState } from './defaultState';
import { connectDB } from './connect-db';

async function initializeDB() {
    let db = await connectDB();
    let user = db.collection(`users`).findOne({ id: "U1" });
    console.log("User?", user);
    if (!user) {
        for (let collectionName in defaultState) {
            console.log('initializing collection', collectionName);
            let collection = db.collection(collectionName);
            await collection.insertMany(defaultState[collectionName]);
        }
    }
}

initializeDB();