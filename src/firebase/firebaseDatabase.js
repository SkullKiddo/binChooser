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
export function addVoterToMatchBD(matchId){
    console.log("______ añadiendo voter apra match: ", matchId)
    const votersRef = ref(database, "/matches/"+matchId+"/voters")
    push(votersRef, {
            name: "fakeTestVoter"
    })
}