import React from "react";
import { createContext } from "react";
export const BioContext=createContext();
const BioProvider=({children})=>{
   const name='haider';
   return(
   
    <BioContext.Provider value={name}>
        {children}
    </BioContext.Provider>
  
    )
    }
export default BioProvider; 