import React from 'react';
import styles from './Cards.module.scss';
import {Link} from 'react-router-dom';

const Cards = ({page,results}) => {

  let display;
  if(results){
    // if there is data in database run this
    display = results.map(x => {
      let {id, status, image, location, name} =x;
      return (
        <Link to = {`${page}${id}`} className='col-lg-4 col-md-6 col-12' key = {id}>
          <div className={`${styles.cards} position-relative d-flex flex-column justify-content-center`} >
            
              <img src = {image} alt = "" className={`${styles.img} img-fluid`}/>
            

            <div className={styles.content}>
                <h3 className='fs-4 fw-bold text-dark'>{name}</h3>
                <p className='text-dark'>Last Location</p>
                <div className = "fs-4 text-dark">{location.name}</div>
            </div>
          {(()=> {
            if(status === "Alive"){
              return (
                <div className = {`${styles.badge} position-absolute text-bg-success`}>{status}</div>
              )
            } else if( status === "Dead"){
              return (
                <div className = {`${styles.badge} position-absolute text-bg-danger`}>{status}</div>
              )
            } else {
              return (
                <div className = {`${styles.badge} position-absolute text-bg-secondary`}>{status}</div>
              )
            }
          })()}
          </div>
        </Link>
      )
    })
  } else {
   // else run this code
    display = "No character found:/";
  }

  return (
    <>
        {display}
    </>
  )
}

export default Cards;

