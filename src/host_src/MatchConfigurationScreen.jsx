import Button from '@mui/material/Button'
import ConectVotersScreen from "./ConnectVotersScreen"
import FilesInputScreen from "./FilesInputScreen"

export default function MatchConfigurationScreen(props){
    

    const matchId = props.matchId
    const fatherComponentSetImages = props.setImages
    const fatherComponentSetVoters = props.setVoters
    const images = null
    const voters = null

    console.log("matchId:" , matchId)

    function backPropagateResults(){
        if(!images) alert("Images no seteadas")
        if(!voters) alert("Voters no seteadas")
        fatherComponentSetImages(images)
        fatherComponentSetVoters(voters)
    }

    return(
        <>
        <FilesInputScreen images={images}/>
        <ConectVotersScreen matchId={matchId} voters={voters}/>
        <Button variant="text" color="primary" onClick={backPropagateResults} >
          Start votation!
        </Button>
        </>
    )
}

