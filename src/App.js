import React from "react";
import { createBrowserRouter as Route,Router } from "react-router-dom";
import {
       createBrowserRouter,
       RouterProvider
    } from "react-router-dom"
    function App(){
    const router=createBrowserRouter([
           {
             path:"/counter",
             element:<Counter/>
           },
           {
             path:"/kab",
             element:<Kab/>
           },
           {
            path:"/mui",
            element:<Mui/>
           }
    ])
    return(
      <>
      <RouterProvider router={router}/>
      </>
    )
  }
  export default App;