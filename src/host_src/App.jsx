// import React, { useState } from 'react';
import "./../index.css";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
// import { Button } from "@mui/material";
import * as React from "react";
import { getUserOrSignIn } from "../common_src/firebaseAuth";
import { createMatchOnDB } from "./host_DB";

import Button from '@mui/material/Button';
import ResultScreen from "../common_src/ResultScreen";
import MatchConfigurationScreen from "./MatchConfigurationScreen";



function App(){
    const [googleUser, setGoogleUser] = React.useState()
    const [voters, setVoters] = React.useState()
    const [images, setImages] = React.useState()
    // const [result, setResult] = React.useState()
    const matchId = React.useRef(null)
    console.log("calling use efect")
    React.useEffect(() => {
        console.log("inside userEffect")
        matchId.current = createMatchOnDB()
      return () => {
      }
    }, [])
    
    
    

    console.log("______ re render")

    
    return <div className="div">pantalla</div>

    
    if(!googleUser)
        return (
            <Button onClick={() => getUserOrSignIn(setGoogleUser)}> Sign In </Button>
        )

    if(!images || !voters)
        return <MatchConfigurationScreen setImages={setImages} setVoters={setVoters} matchId={matchId.current} />

    // if(!result)
    //     return <VotationScreen images={imagesVoting} setResult={setResult} width="100vp" height="100vp"/>

    return <ResultScreen result={images[0]} />
}

export default App;