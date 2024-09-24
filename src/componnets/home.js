import React from "react";
import { useContext } from "react";
import { ApiContext } from "./context/ApiData";
function Home(){
    const user=useContext(ApiContext);
    return(
        <>
        <h1>home</h1>
          {user.map(item=>(
            <h6>{item.email}</h6>
          ))}
        </>
    )
}
export default Home;   




