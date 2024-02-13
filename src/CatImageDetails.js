import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function CatImageDetails({ match }) {

    const [imgDetails, setImgdetails] = useState([]);

    useEffect(() => {
        fetDetails();
    }, [])

    const fetDetails = async () => {
        try {
            // const id= match.params.id;
            // const res = await axios.get(`https://api.thecatapi.com/v1/breeds?limit=10&page=0/${id}`)
            const res = await axios.get('https://api.thecatapi.com/v1/breeds?limit=10&page=0')
            console.log(res);
            const data = await res.data;
            setImgdetails(data);
        } catch (error) {
            console.error('data fetching error');
        }
    }

    return (
        <div>
            {
                imgDetails.map((x) => {
                    return <div key={x.id}>
                        <h1>{x.name}</h1>
                        <p>{x.origin}</p>
                        <p>{x.origin}</p>
                        <p>{x.weight.metric}</p>
                        <p>{x.hairless}</p>
                        <p><a href={x.wikipedia_url} >Wikipedia</a></p>
                        {/* <img src={x.image.url} alt='details'></img> */}
                    </div>

                })
            }
            {/* <img src={imgDetails.image.url} alt='ImageDetail1'></img> */}
        </div>
    )
}

export default CatImageDetails