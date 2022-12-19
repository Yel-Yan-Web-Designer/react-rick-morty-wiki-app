import React from 'react'
import FilterBTN from '../FilterBTN'

const Species = ({setSpe , setPageNumber}) => {

  let species = [
    'Human',
    'Alien',
    'Humanoid',
    'Poppybutthole',
    'Mythological',
    'Unknown',
    'Animal',
    'Disease',
    'Robot',
    'Cronenberg',
    'Planet',

  ]
  return (
    <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Species
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body d-flex flex-wrap gap-2">

        {species.map((items, index) => (
          <FilterBTN
            task = {setSpe}
            setPageNumber = {setPageNumber}
            key = {index}
            name = 'species'
            items = {items}
            id = {index}
          />
        ))}

      </div>
    </div>
  </div>
  )
}

export default Species