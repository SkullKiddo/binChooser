import { getDatabase, onValue, push, ref, set } from "firebase/database";
import { firebaseApp } from "../common_src/firebaseApp";
import * as UTILS_DB from "../common_src/utils_DB";


export const database = getDatabase(firebaseApp);

var matchVotersPath = null  
var matchImagesPath = null  

export function createMatchOnDB(){
    const matchesRef = ref(database, UTILS_DB.matchesPath)
    console.log("pushing:", matchesRef)
    const child = push(matchesRef, {images:"test"});
    console.log("child: " + "GUSTAVO")
    console.log("child.key: " + child.key)
    [matchImagesPath, matchVotersPath] = UTILS_DB.createPathsFromMatchId(child.key)
    return "gustavo"
}

export function writeImagesToDB(images) {
    
    const matchesRef = ref(database, matchImagesPath)
    set(matchesRef, {
            images: images
    });
}

export function setVotersHookDB(setVotersHook){
    const votersRef = ref(database, matchVotersPath)
    console.log("______ escuchando: ", matchVotersPath)
    onValue(votersRef,(dbResult) => {
        if(dbResult && dbResult.val()){
            console.log("______ leidos users:", Object.values(dbResult.val()))
            const voters = Object.values(dbResult.val())
            setVotersHook(voters)
        }
    } )
    // onValue(votersRef,(DB) => {setVotersHook(DB)} )
}
