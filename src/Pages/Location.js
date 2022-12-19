import React from 'react';
import { useState, useEffect } from 'react';
import Cards from '../components/Cards/Cards';
import InputGroup from '../components/Filters/Category/InputGroup';

const Location = () => {
  const [id, setId] = useState(1);
  const [info, setInfo] = useState([]);
  const [results, setResults] = useState([]);

  let {name, type, dimension} = info;  // destructure info object


  let api = `https://rickandmortyapi.com/api/location/${id}`; // get api and use in useEfect

  useEffect(()=> {
      (async function (){
        let data = await fetch(api).then(res => res.json());
        setInfo(data);

        let resolvedPromiseValue = await Promise.all(
          data.residents.map((x) => {
            return fetch(x).then(res => res.json());
          })
        )

        setResults(resolvedPromiseValue);
      })()
  }, [api])

  return (
      <div className='container'>

          <div className="row text-center mb-4">
            <h1 className='mb-4'>
              Location name : 
              &nbsp;<span className = "text-primary">{name === "" ? "Unknown" : name}</span>
            </h1>
            <h5>Dimension: {dimension === ""? "Unknown" : dimension }</h5>
            <h5>Type: {type  === ""? "Unknown" : type }</h5>
          </div>

          <div className="row">
              <div className="col-lg-3 col-12">
                  <h4 className='text-center fw-bold mb-3'>Pick Location</h4>
                  <InputGroup 
                    name = "Location"
                    setId = {setId}  //update cards functionality by setting id
                    total = {126}
                  />
              </div>
              <div className="col-lg-8 col-12">
                <div className="row" style={{rowGap : "2em"}}>
                  <Cards page = "/location/" results={results}/>
                </div>
              </div>
          </div>
      </div>
  )
}

export default Location