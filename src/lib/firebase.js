import { seedDatabase } from '../seed';

const config = {
    apiKey: process.env.IG_APIKey,
    authDomain: process.env.IG_authDomain,
    databaseURL: process.env.IG_databaseURL,
    projectId: "igclone16",
    storageBucket: process.env.IG_storageBucket,
    messagingSenderId: process.env.IG_messagingSenderId,
    appId: process.env.IG_appId
};

const firebase = window.firebase.initializeApp(config);
const { FieldValue } = window.firebase.firestore;

seedDatabase(firebase);

export { firebase, FieldValue };