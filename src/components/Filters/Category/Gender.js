import React from 'react'
import FilterBTN from '../FilterBTN';

const Gender = ({setGender, setPageNumber}) => {

  let gender = ['Male', 'Female', 'Genderless', 'Unknown'];

  return (
    <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
       Gender
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body d-flex flex-wrap gap-2">
        {
          gender.map((items, index) => (
            <FilterBTN
              task = {setGender}
              setPageNumber = {setPageNumber}
              key = {index}
              id = {index}
              name = 'gender'
              items = {items}
            />
          ))

        }
      </div>
    </div>
  </div>
  )
}

export default Gender