import { getDatabase } from "firebase/database";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";





// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1mcIEOuXGLdKFPQq_dcJ6GQSCbqlfI_w",
  authDomain: "geoflare.firebaseapp.com",
  databaseURL: "https://geoflare-default-rtdb.firebaseio.com",
  projectId: "geoflare",
  storageBucket: "geoflare.appspot.com",
  messagingSenderId: "149802851296",
  appId: "1:149802851296:web:c86016fe23157afa5b6985",
  measurementId: "G-HKFQSQM52X",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export default db;