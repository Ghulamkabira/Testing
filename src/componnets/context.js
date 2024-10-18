import React from "react";
import { createContext } from "react";
export const BioContext=createContext();
const BioProvider=({children})=>{
   const name='ali';

return(
    <>
      <BioContext.Provider value={name}>
        {children}
      </BioContext.Provider>
    </>
)
}
export default BioProvider

