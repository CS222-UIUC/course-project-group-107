import React from "react";
import axios, { Axios } from "axios";
function Home(){
  info = axios.get("http://127.0.0.1:8000/api/data")
              .then(() => null, err => err);
    return (
      <div>
        There are info people in the ARC at this moment.
      </div>
        
      );
}

export default Home;