import { getDatabase, push, ref } from "firebase/database";
import { firebaseApp } from "../common_src/firebaseApp";
import { getUserOrSignIn } from "../common_src/firebaseAuth";
import * as UTILS_DB from "../common_src/utils_DB";


export const database = getDatabase(firebaseApp);

var matchImagesPath = null
var matchVotersPath = null



export function addVoterToMatchBD(matchId){
    console.log("______ escribiendo: ", matchVotersPath)
    [matchImagesPath, matchVotersPath] = UTILS_DB.createPathsFromMatchId(matchId)

    getUserOrSignIn().then((user) => {
        console.log("______ user.email:", user.email)
        const votersRef = ref(database, matchVotersPath)
        push(votersRef, { //______ esto la key deberia ser el email pero si lo hago necesito mas mails para hacer pruebas
                email: user.user.email
        })
    })
}
