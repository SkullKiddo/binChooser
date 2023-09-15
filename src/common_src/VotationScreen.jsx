import * as React from "react";
import Grid from '@mui/material/Grid'




function handleVote(imagesVoting, setImagesVoting, votedIndex){
  console.log("______ handle vote: ", votedIndex)
  const candidates = imagesVoting.splice(0, 2)
  imagesVoting.push(candidates[votedIndex])
  setImagesVoting([...imagesVoting])
}
    
export default function VotationScreen(props) {
  return (
      <Grid container spacing={5} columns={{ xs: 1, sm: 2}} style={{height: '100vh'}} >
          <Grid item xs={1} width="100vp" height="100vp" style={{color: "red"}}>
            <img src={props.imagesVoting[0]} style={{width: "100%", height: "100%", objectFit: "contain" }} alt="" onClick={() => handleVote(props.imagesVoting, props.setImagesVoting, 0)}/>
          </Grid>
          <Grid item xs={1}>
          <img src={props.imagesVoting[1]} style={{width: "100%", height: "100%", objectFit: "contain" }} alt="" onClick={() => handleVote(props.imagesVoting, props.setImagesVoting, 1)}/>
          </Grid>
      </Grid>
    // <>
    // <div>Votation Screen</div>
    // <img src={props.imagesVoting[0]} alt="" onClick={() => handleVote(props.imagesVoting, props.setImagesVoting, 0)}/>
    // <img src={props.imagesVoting[1]} alt="" onClick={() => handleVote(props.imagesVoting, props.setImagesVoting, 1)}/>
    // </>
  )
}
  