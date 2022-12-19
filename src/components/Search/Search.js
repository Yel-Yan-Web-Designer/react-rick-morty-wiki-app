import React from 'react';
import styles from './Search.module.scss';

const Search = ({setSearch ,setPageNumber}) => {
  return (
    <>
        <form className='d-flex flex-column flex-sm-row align-items-center justify-content-center my-4 gap-3' onSubmit={e => e.preventDefault()}>
            <input 
                onChange = {e => {
                    setSearch(e.target.value);
                    setPageNumber(1);
                }}
                placeholder='Search' 
                type = "text" 
                className={styles.input}
            />
            <button className = {`${styles.btn} btn btn-primary`} onClick = {e => e.preventDefault()}>Search</button>
        </form>
    </>
  )
}

export default Search