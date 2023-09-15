import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { firebaseApp } from "./firebaseApp";

// Initialize Firebase

const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider()

let user



export async function getUserOrSignIn(setGoogleUserHook){  //deberia ser 2 funciones distintas, una setea hooker la otra busca y devuelve el usuario
    if(user) return user

    const promise = signInWithPopup(auth, provider)
    promise.then(
      (result) => {
          return result.user
      }
    ).catch(
        (error) => { GoogleAuthProvider.credentialFromError(error) }
    )

    console.log("_____ promise before await:", promise)
    user = await promise
    console.log("_____ user before await:", user)

    if(setGoogleUserHook){
        setGoogleUserHook(user)
    }
    
    return user
}