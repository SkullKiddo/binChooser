import * as React from "react";
import { setVotersHookDB } from "./host_DB";

export default function ConnectVotersScreen(props){

    const setFinalVoters=props.setVoters
    const matchId = props.matchId
    const [voters, setVoters] = React.useState([])
    
    
    React.useEffect(() => {
        setVotersHookDB(setVoters, matchId)
    }, [matchId]);

    function confirmVoters(){
        setFinalVoters(voters)
    }


    return(
        <>
        <div className="div">Para conectarte usa el id: {matchId}</div>
        <div className="div">Voters: {matchId}</div>
        {voters.map(voter => <div className="div">{voter.email} </div>)}
        </>
    )
}