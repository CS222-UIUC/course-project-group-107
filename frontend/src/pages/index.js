import React from "react";
import "./index.css"

function Home(){
  const styleObj = {
    fontSize: 80,
    color: "#13294B",
    textAlign: "left",
    position: "absolute",
    paddingLeft: "100px",
}
const styleObjTwo = {
  fontSize: 50,
  color: "#13294B",
  textAlign: "left",
  paddingTop: "115px",
  position: "absolute",
  paddingLeft: "115px",
}
    return (
        <div class = "bg-container">
          <p style={styleObj}>Welcome to the ARC!</p>
          <p style={styleObjTwo}>Sign in to get started :)</p>
        </div>
      );
}

export default Home;