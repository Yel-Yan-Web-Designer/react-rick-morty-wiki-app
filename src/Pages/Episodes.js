import React from 'react';
import { useState, useEffect } from 'react';
import Cards from '../components/Cards/Cards';
import InputGroup from '../components/Filters/Category/InputGroup';

const Episodes = () => {
  const [id, setId] = useState(1);
  const [info, setInfo] = useState([]);
  const [results, setResults] = useState([]);

  let {air_date, name} = info;  // destructure info object


  let api = `https://rickandmortyapi.com/api/episode/${id}`; // get api and use in useEfect

  useEffect(()=> {
      (async function (){
        let data = await fetch(api).then(res => res.json());
        setInfo(data);

        let resolvedPromiseValue = await Promise.all(
          data.characters.map((x) => {
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
              Episode name : 
              &nbsp;<span className = "text-primary">{name === "" ? "Unknown" : name}</span>
            </h1>
            <h5>Air Date : {air_date === ""? "Unknown" : air_date }</h5>
          </div>

          <div className="row">
              <div className="col-lg-3 col-12">
                  <h4 className='text-center fw-bold mb-3'>Pick Episode</h4>
                  <InputGroup 
                    name = "Episode"
                    setId = {setId}  //update cards functionality by setting id
                    total = {51}
                  />
              </div>
              <div className="col-lg-8 col-12">
                <div className="row" style={{rowGap : "2em"}}>
                  <Cards page ="/episodes/" results={results}/>
                </div>
              </div>
          </div>
      </div>
  )
}

export default Episodes