import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function CatBreedList() {

    const [catlist, setCatlist]=useState([]);

    useEffect(()=>{
        fetCatList();
    },[])

    const fetCatList=async ()=>{
        try{
            const res = await axios.get('https://api.thecatapi.com/v1/breeds?limit=10&page=0');
            console.log(res);
            const data = await res.data;
            setCatlist(data);
        }catch(error){
            console.error('data fetching error');
        }
    }


  return (
    <div>
            <ul>
                <table>
                    <thead>
                        <th>Breed Name</th>
                        <th>Breed Origin</th>
                    </thead>
                    <tbody>
                        {
            catlist.map((val)=>{
               return <tr key={val.id} >
                        <td>
                            <Link to={`catlist/${val.id}`}>{val.name}</Link></td> 
                        <td> <Link to={`catlist/${val.id}`}>{val.origin}</Link></td>  
                    </tr>
            })
        }
                    </tbody>
                </table>
                
            </ul>
    </div>
  )
}

export default CatBreedList