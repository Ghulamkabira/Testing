import   {useEffect,useState} from "react";
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import axios from "axios";

  
  function Table(){
    const [per, setPer] = useState([])

     useEffect(()=>{
    async function  dataFetch(){
        const response=await axios.get('https://jsonplaceholder.typicode.com/users')
        setPer(response.data)

    }
      dataFetch()

    },[])
       console.log(per)

     const rows=per.map(item=>({
           id:item.id,
           col1:item.id,
           col2:item.name,
           col3:item.username,
           col4:item.email,
           col5:item.phone,
           col6:item.website,
     }))
     const columns=[
            { field:'col1',headerName:'id',width:'150'},
            {field:'col2',headerName:'name',width:'150'},
            { field:'col3',headerName:'username',width:'150'},
            { field:'col4',headerName:'email',width:'150'},
            { field:'col5',headerName:'phone',width:'150'},
            { field:'col6',headerName:'website',width:'150'},

     ];

    return (
        <>
        <h1>Table</h1>
        <div style={{ height: 700, width: '100%',marginLeft:80,marginRight:80 }}><br></br>
            <DataGrid rows={rows} columns={columns}/>
        </div>
      </>
    )
  }
  export default Table;