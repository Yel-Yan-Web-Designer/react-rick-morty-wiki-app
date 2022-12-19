import React from 'react';
import styles from './Filters.module.scss'
import Gender from './Category/Gender';
import Species from './Category/Species';
import Status from './Category/Status';


const Filters = ({ results, setPageNumber, setStatus, setGender, setSpe }) => {


  function clearFilters () {
    setPageNumber(1);
    setGender("");
    setStatus("");
    setSpe("");

    // when click clear filters, refresh page
    window.location.reload(false);
  }

  return (
    <div className='col-lg-3 col-12 '>
      <h1 className='fs-3 fw-bold text-center'>Filters</h1>

      <div 
        className={`${styles.clear} text-primary text-center text-decoration-underline fs-6 mb-3`} 
        onClick = {clearFilters}
      >
        Clear Filters
      </div>

      <div className="accordion" id="accordionExample">
        <Status setPageNumber = {setPageNumber} setStatus = {setStatus}/>
        <Gender setPageNumber = {setPageNumber} setGender = {setGender}/>
        <Species setPageNumber = {setPageNumber} setSpe = {setSpe}/>
      </div>

    </div>
  )
}

export default Filters