import * as React from "react";




    
export default function ResultScreen(props) {
  return (
    <>
    <div style={{textAlign: "center"}} >Winner winner chicken dinner</div>
    <img src={props.result} alt="" style={{width: "50%", display: "block", marginLeft: "auto", marginRight: "auto" }}/>
    </>
  )
}
  