import axios from 'axios'
import React, { useState } from 'react'
import './styling.css';

function Rushyaimg() {

    const [val, setval] =useState([]);
    // function buttonHandler(event)
    // {

    // }

    // const buttonHandler= async (event)=>{

    //     // const res = await axios.get('https://api.unsplash.com/photos/?client_id=hJltBcsaDBI2pi9gTl4oaPz0-FUleyGoNExbvWO3noc');
    //     const res = await axios.get('/images');
    //     const data2 = await res.data;
    //     setval(data2);
    //     console.log(res);
    // }

    const buttonHandler= (event)=>{
        try{
        const response = fetch('https://api.unsplash.com/photos/?client_id=hJltBcsaDBI2pi9gTl4oaPz0-FUleyGoNExbvWO3noc');
        // const data2 = await res.data;
        // setval(data2);
        console.log(response);
        // if (!response.ok) {
        //     throw new Error('Failed to fetch image');
        //   }
          const imageData = response.json();
        //   const imageUrl = URL.createObjectURL(imageData);
          setval(imageData);
        } catch (error) {
          console.error('Error fetching image:', error);
        }
    }


  return (
    <div>
        <button onClick={buttonHandler} className='bt'>Display Image</button>
        {console.log(val)}
        {
            
            val.length>0 && (
            val.map((x)=>{
                return (
                    <div className='imgs'>
                        <img src={x.urls.small} alt='images'></img>
                        {/* <img key={image.id} src={`data:image/jpeg;base64,${image.imageUrl}`} alt="Uploaded Image" /> */}
                    </div>
                )
            }))
        }
    </div>
  )
}

export default Rushyaimg