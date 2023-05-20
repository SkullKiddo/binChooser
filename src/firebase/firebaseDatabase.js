import { firebaseApp } from "./firebaseApp"
import { getDatabase, ref, set, push  } from "firebase/database";

const database = getDatabase(firebaseApp);


export function writeImagesToDB(images) {
    const matchesRef = ref(database, "/matches")
    const child = push(matchesRef, {
            images: images
    });
    return child.key
}