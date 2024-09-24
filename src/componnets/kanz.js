// fetching  data by using fetch
import React, { useEffect, useState } from "react";
function Kanz(){
        const[data,setData]=useState([]);
   useEffect(()=>{
      async function dataFetch (){
       const response=await fetch(link)
       const data=await response.json()
      
}
dataFetch()
console.log(data)
},[])

  return(
    <>
<h1>data</h1>
  {data.map(item=>(
<h1>{item.title}</h1>
  ))}

    </>
  )
}
export default Like

// fetching data by using axios
import React from "react";
import axios from "axios";
function app(){
const[post,setPost]=useState([])
useEffect(()=>{
async function dataFetch(){
  const response=await axios.get(link)
  setPost(response.data)
}
},[])

return(
  <>
  <h1>post</h1>
  {post.map(item=>(
 <h1>{item.title}</h1>
  ))}
  </>
)
}


import { useEffect, useState } from "react";
import { Button, Select, MenuItem } from "@mui/material"; // Changed to MUI core Select
import axios from "axios";

function Muii() {
    const [per, setPer] = useState([]);
    const [selectedUser, setSelectedUser] = useState("");

    useEffect(() => {
        async function dataFetch() {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            setPer(response.data);
        }
        dataFetch();
    }, []);

    const handleSubmit = (e) => {
            e.preventDefault(); // Prevent page reload
             console.log(selectedUser); // Log the selected user
    };

    const handleChange = (event) => {
        setSelectedUser(event.target.value);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: 60 }}>
            <form onSubmit={handleSubmit}>
                <Select
                    value={selectedUser}
                    onChange={handleChange}
                    placeholder="Select a user"
                    name="user"
                    required
                >
                    {per.map(item => (
                        <MenuItem key={item.id} value={item.name}>{item.name}</MenuItem> // Added key and changed to MenuItem
                    ))}
                </Select>
                <Button type="submit" sx={{ position: 'relative', marginTop: 5 }} variant="outlined" color="error">Submit</Button>
            </form>
        </div>
    );
}

export default Muii;
