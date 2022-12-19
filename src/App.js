import React, {useState, useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Cards from "./components/Cards/Cards";
import Filters from "./components/Filters/Filters";
import Pagination from "./components/Pagination/Pagination";
import Search from "./components/Search/Search";
import Navbar from "./components/Navbar/Navbar";

import {BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Episodes from "./Pages/Episodes";
import Location from "./Pages/Location";
import CardDetails from "./components/Cards/CardDetails";

function App () {
  return (
      <Router>
        <div className="App">
          <Navbar/>
        </div>


        {/* 
          slash "/" means it will be our home page, "/" render <Home/> component 
          "/episodes" means, it will render <Episodes/> component 
          "/location" means, it will render <Location/> component 
          ":/id" i can name id to whatever name i like
        */}
        <Routes>
          <Route path = "/" element = {<Home/>}/>  
          <Route path = "/:id" element = {<CardDetails/>}/>   

          <Route path = "/episodes" element = {<Episodes/>}/>  
          <Route path = "/episodes/:id" element = {<CardDetails/>}/>  

          <Route path = "/location" element = {<Location/>}/> 
          <Route path = "/location/:id" element = {<CardDetails/>}/>   
        </Routes>

      </Router>
  )
}

function Home () {
  const [pageNumber, setPageNumber] = useState(1);
  const [fetchedData, updateFetchedData] = useState([]);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [gender, setGender] = useState("");
  const [spe , setSpe] = useState("");

  let {info, results} = fetchedData;  // destructure fetch data (api)



  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${spe}`;  // character api

  useEffect(() => {
    (async function () {
      // fetch api and convert raw data into json format
      const data = await fetch(api).then(res => res.json());
      updateFetchedData(data);
    })();
  }, [api])

  return (
    <div className="Home">

        <div className="container">
            <Search 
              setSearch = {setSearch}
              setPageNumber = {setPageNumber}
            />
        </div>

        <div className="container mt-5 mb-4">
          <div className="row">
            {/* FILTERS SECTION */}
              <Filters 
                results = {results} 
                setStatus = {setStatus} 
                setPageNumber = {setPageNumber}
                setGender = {setGender}
                setSpe = {setSpe}
                />
            {/* CARDS SECTION */}
            <div className="col-lg-8 col-12">
              <div className="row" style = {{rowGap : "0.7em"}}>
                <Cards page = "/" results = {results}/>
              </div>
            </div>

          </div>
        </div>

        <div className="container py-4">
          <Pagination 
            info = {info}
            pageNumber = {pageNumber}
            setPageNumber = {setPageNumber}
          />
        </div>
    </div>
  );
}

export default App;
