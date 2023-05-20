// import React, { useState } from 'react';
import FilesInputScreen from "../FilesInputScreen";
import ConectVotersScreen from "../ConnectVotersScreen";
import VotationScreen from "../VotationScreen";
import ResultScreen from "../ResultScreen";
import "./../index.css"

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
// import { Button } from "@mui/material";
import * as React from "react";
import { signInWithGoogle } from "../firebase/firebaseAuth"


function App(){
    // const [imagesVoting, setImagesVoting] = React.useState()
    const imagesVoting = []
    const [googleUser, setGoogleUser] = React.useState()
    const [matchId, setMatchId] = React.useState()
    

    console.log("______ re render")

    

    if(!googleUser) return <button onClick={() => signInWithGoogle(setGoogleUser)} >Sign in</button>

    if(!matchId)
        return <FilesInputScreen imagesVoting={imagesVoting} setMatchId={setMatchId}/>
    return <ConectVotersScreen matchId={matchId} />

    // if(imagesVoting.length > 1)
    //     return <VotationScreen imagesVoting={imagesVoting} setImagesVoting={setImagesVoting} width="100vp" height="100vp"/>

    // else
    //     return <ResultScreen result={imagesVoting[0]} />
}

export default App;