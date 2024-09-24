import   {useEffect,useState} from "react";
import { Button,Input ,Checkbox,Box,MenuItem,Select} from "@mui/material";
import { colors } from "@mui/material";

import Option from '@mui/joy/Option';
import axios from "axios";


function Mui(){
    const [per, setPer] = useState([]);
    const [selectedUser, setSelectedUser] = useState("");

     useEffect(()=>{ 
    async function  dataFetch(){
        const response=await axios.get('https://jsonplaceholder.typicode.com/users')
        setPer(response.data)
    }
      dataFetch()
    },[])
     const handleSubmit = (e) => {
        e.preventDefault(); // Prevent page reload
        console.log(selectedUser); // Log the selected user
    };

     const handleChange = (event) => {
        setSelectedUser(event.target.value);
     };

return(
    <>
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

    </>
)
}
export default Mui
