// Import the functions you need from the SDKs you need

import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBkE3_tg8dkuEe80FVUge60TufldIJRn0E",
    authDomain: "backendtest-6a056.firebaseapp.com",
    databaseURL: "https://backendtest-6a056-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "backendtest-6a056",
    storageBucket: "backendtest-6a056.appspot.com",
    messagingSenderId: "711858650040",
    appId: "1:711858650040:web:c84e161dd7a887042eed4d",
    measurementId: "G-JZZ17XGHW1"
};


export const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);