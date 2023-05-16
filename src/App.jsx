// import React, { useState } from 'react';
import FilesInputScreen from "./FilesInputScreen";
import VotationScreen from "./VotationScreen";
import ResultScreen from "./ResultScreen";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
// import { Button } from "@mui/material";
import * as React from "react";



function App(){
    const [imagesVoting, setImagesVoting] = React.useState()

    console.log("______ re render")

    if(!imagesVoting)
        return <FilesInputScreen setImagestUploadedFunct={setImagesVoting}/>

    if(imagesVoting.length > 1)
        return <VotationScreen imagesVoting={imagesVoting} setImagesVoting={setImagesVoting}/>

    else
        return <ResultScreen result={imagesVoting[0]} />
}

export default App;