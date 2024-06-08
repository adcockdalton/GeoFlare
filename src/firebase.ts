import { getDatabase }   from "firebase/database";
import { initializeApp } from "firebase/app";


/**
 * Firebase configuration object.
 */
const firebaseConfig = {
    apiKey           : process.env.FIREBASE_API_KEY,
    authDomain       : "geoflare-e56a6.firebaseapp.com",
    databaseURL      : "https://geoflare-e56a6-default-rtdb.firebaseio.com",
    projectId        : "geoflare-e56a6",
    storageBucket    : "geoflare-e56a6.appspot.com",
    messagingSenderId: "22597622869",
    appId            : "1:22597622869:web:1e0c2e2d98e002fbd888dc"
};

const app            = initializeApp(firebaseConfig);
const db             = getDatabase(app);

export default db;