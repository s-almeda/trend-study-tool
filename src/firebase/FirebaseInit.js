// src/firebase/FirebaseInit.js


// Import the functions we need from the SDKs we need... 
import { initializeApp } from "firebase/app";
import fb from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/storage";


// Your web app's Firebase configuration
const firebaseApp = fb.initializeApp({
  apiKey: "AIzaSyBrkVWZauXBDg2cKGX3LiPYkB1oRvTSFU8",
  authDomain: "trend-study-tool.firebaseapp.com",
  projectId: "trend-study-tool",
  storageBucket: "trend-study-tool.appspot.com",
  messagingSenderId: "21947680524",
  appId: "1:21947680524:web:27435aebfa2f9e3181eb29"
});


//export the database so we can access it from our app using the "db" variable
export const db = firebaseApp.firestore();
export const storage = fb.storage();
export {fb} ;

