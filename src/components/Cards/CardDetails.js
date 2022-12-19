import React,{useState, useEffect} from 'react';
import {useParams } from 'react-router-dom';

const CardDetails = () => {
    const [fetchedData , updateFetchedData] = useState([]);
    let {id} = useParams();

    let { name, image, status, gender, location, origin, species} = fetchedData;

    
    let api = `https://rickandmortyapi.com/api/character/${id}`;

    useEffect(()=> {
        (async function () {
            let data = await fetch(api).then(res => res.json());
            updateFetchedData(data);
        })();
    }, [api])


  return (
    <>
        <div className="d-flex justify-content-center align-items-center flex-column">
            <div className="d-flex flex-column gap-2">
                <h1 className="fw-bold text-center">{name}</h1>
                <img src = {image} alt ="character's photo" className='img-fluid'/>
                <h4 className="status text-white bg-success py-1 text-center rounded fs-4">{status}</h4>
                <div className="content">
                    <h4 className='fs-6 fw-bold'>Gender: <span className='fw-normal'>{gender}</span></h4>
                    <h4 className='fs-6 fw-bold'>Location: <span className='fw-normal'>{location ? location.name : "Unknown"}</span></h4>
                    <h4 className='fs-6 fw-bold'>Origin: <span className='fw-normal'>{origin ? origin.name : "Unknown"}</span></h4>    
                    <h4 className='fs-6 fw-bold'>Species: <span className='fw-normal'>{species}</span></h4>   
                </div>
            </div>
        </div>
    </>
  )
}

export default CardDetails;