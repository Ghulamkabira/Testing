import React from "react";
import { useContext } from "react";
import { ApiContext } from "./context/ApiData";
function Sa(){
    const user=useContext(ApiContext);
    return(
        <>
          {user.map(item=>(
            <h6>{item.name}</h6>
          ))}
        </>
    )
}
export default Sa;

