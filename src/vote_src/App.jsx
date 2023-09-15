import { Button, Input } from "@mui/material";
import * as React from "react";
import { getUserOrSignIn } from "../common_src/firebaseAuth";
import { addVoterToMatchBD } from "./vote_DB";

export default function App(){

    function getMathIdInput(e){
        // Prevent the browser from reloading the page
        e.preventDefault();
    
        // Read the form data
        const form = e.target;
        const formData = new FormData(form);
    
    
        // Or you can work with it as a plain object:
        const formJson = Object.fromEntries(formData.entries());
        return formJson.matchId
    }

    function handleSubmit(e) {
        const matchId = getMathIdInput(e)
        addVoterToMatchBD(matchId)

    }

    const [googleUser, setGoogleUser] = React.useState()
    if(!googleUser) return <Button color="danger" variant="solid" onClick={() => getUserOrSignIn(setGoogleUser)} >Sign in</Button>
    return(
        <form method="post" onSubmit={handleSubmit}>
            <div className="div">Pagina de voter</div>
            <Input
                name="matchId"
                disabled={false}
                placeholder="Match ID"
                size="md"
            />
            <Button type="submit" variant="text" color="primary">
                Connect
            </Button>
        </form>
    )
}