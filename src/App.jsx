// import React, { useState } from 'react';
import FilesInputScreen from "./FilesInputScreen";
import VotationScreen from "./VotationScreen";
import ResultScreen from "./ResultScreen";
import BasicGrid from "./testImagenes";
import "./index.css"

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
// import { Button } from "@mui/material";
import * as React from "react";

// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional






import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";











const firebaseConfig = {
  apiKey: "AIzaSyBkE3_tg8dkuEe80FVUge60TufldIJRn0E",
  authDomain: "backendtest-6a056.firebaseapp.com",
  projectId: "backendtest-6a056",
  storageBucket: "backendtest-6a056.appspot.com",
  messagingSenderId: "711858650040",
  appId: "1:711858650040:web:c84e161dd7a887042eed4d",
  measurementId: "G-JZZ17XGHW1"
};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);




const auth = getAuth();

const provider = new GoogleAuthProvider()










































function signInWithGoogle(setGoogleUser){
    signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    setGoogleUser(user)
    // IdP data available using getAdditionalUserInfo(result)
    // ...
    console.log("se ha autentificado: ", user)
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
  
}



function App(){
    const [imagesVoting, setImagesVoting] = React.useState()
    const [googleUser, setGoogleUser] = React.useState()
    

    console.log("______ re render")

    

    // if(googleUser) return <div>Registrado usuario {googleUser.displayName}</div>
    // else return <button onClick={() => signInWithGoogle(setGoogleUser)} >Sign in</button>

    if(!imagesVoting)
        return <FilesInputScreen setImagestUploadedFunct={setImagesVoting}/>

    if(imagesVoting.length > 1)
        return <VotationScreen imagesVoting={imagesVoting} setImagesVoting={setImagesVoting} width="100vp" height="100vp"/>

    else
        return <ResultScreen result={imagesVoting[0]} />
}

export default App;