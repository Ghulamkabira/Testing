import React from "react";
import { BrowserRouter as Router,Route,Switch } from "react-router-dom";
import * as ReactDOM from "react-dom/client";
import  Navbar from  "./componnets/navbar";
import Mi from "./componnets/hello";
import Service from "./componnets/kab";
import Counter from "./componnets/counter";
import{
    createBrowserRouter,
    RouterProvider,
    } from "react-router-dom";

    function App(){
    const router=createBrowserRouter([           
            {         
                    path:"/counter",
                    element:<Counter/>
             },
             {
                     path:"/kab",  
                     element:<Service/>
             },
             {
                path:"/counter",
                element:<Counter/>
             }

        ])

         return(
        <>
        <Navbar/>
        <RouterProvider router={router}/>
        </>
        )
        }
        export default App
        import './navbar.css'; 
// context
        import { createContext } from "react";

        export const BioContext = createContext();
        
        const BioProvider = ({ children }) => { 
            const name = 'ali';
            return 
            <BioContext.Provider value={name}>{children}</BioContext.Provider>;
        }
        
        export default BioProvider;
// parent

        import { useContext } from "react";
import React from "react";
import { BioContext } from './context'; 

function Parent() {
    const name = useContext(BioContext); 
    return (
        <>
            <h1>Hello</h1>
            <p>I am from {name}</p>
        </>
    );
}

export default Parent;


// app
import React from "react";
import Parent from "./componnets/sa"; 
import BioProvider from './componnets/context'; 

function App() {
    return (
        <>
            <BioProvider>
                <Parent />
            </BioProvider>
        </>
    );
}

export default App;