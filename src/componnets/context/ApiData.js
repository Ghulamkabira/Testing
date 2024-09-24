import { createContext,useState,useEffect } from "react";
import axios from "axios";

const ApiContext=createContext();
const ApiProvider=({children})=>{
    const[users,setUsers]=useState([]);
    useEffect(()=>{
        async function usersData() {
            const response=await axios.get('https://jsonplaceholder.typicode.com/users');
            setUsers(response.data)
        }
        usersData();
    },[])
     
    return(
     <ApiContext.Provider value={users}>
      {children}
     </ApiContext.Provider>

    )

    }
export {ApiContext,ApiProvider}