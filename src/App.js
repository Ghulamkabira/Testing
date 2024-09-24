import React from "react";
import { ApiProvider } from "./componnets/context/ApiData";
import Home from './componnets/home';
import Sa from './componnets/sa';
function App(){

      return(
            <>
            <ApiProvider>
                  <Sa/>
                  <Home/>
            </ApiProvider>
            </>
      )
}
export default App