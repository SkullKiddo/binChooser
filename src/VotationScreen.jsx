import * as React from "react";



function handleVote(imagesVoting, setImagesVoting, votedIndex){
  console.log("______ handle vote: ", votedIndex)
  const candidates = imagesVoting.splice(0, 2)
  imagesVoting.push(candidates[votedIndex])
  setImagesVoting([...imagesVoting])
}
    
export default function VotationScreen(props) {
  return (
    <>
    <div>Votation Screen</div>
    <img src={props.imagesVoting[0]} alt="" onClick={() => handleVote(props.imagesVoting, props.setImagesVoting, 0)}/>
    <img src={props.imagesVoting[1]} alt="" onClick={() => handleVote(props.imagesVoting, props.setImagesVoting, 1)}/>
    </>
  )
}
  