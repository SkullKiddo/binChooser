import { firebaseApp } from "./firebaseApp"
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// Initialize Firebase

const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider()

let user



export async function getUserOrSignIn(setGoogleUserHook){
    if(user) return user

    const promise = signInWithPopup(auth, provider)
    promise.then(
      (result) => {
          return result.user
      }
    ).catch(
        (error) => { GoogleAuthProvider.credentialFromError(error) }
    )

    user = await promise

    if(setGoogleUserHook){
        setGoogleUserHook(user)
    }
    
    return user
}