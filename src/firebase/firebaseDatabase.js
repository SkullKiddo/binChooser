import { firebaseApp } from "./firebaseApp"
import { getDatabase, ref, set, push  } from "firebase/database";

const database = getDatabase(firebaseApp);


export function writeImages(images) {
    console.log("______ writing: ", images)
    const matchesRef = ref(database, "/matches")
    push(matchesRef, {
            images: images
    });
}