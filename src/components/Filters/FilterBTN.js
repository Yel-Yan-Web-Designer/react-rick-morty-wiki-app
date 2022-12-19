import React from 'react'

const FilterBTN = ({id, name , items , setPageNumber, task}) => {

  return (
    <div>

      <style jsx = 'true'>
        {
          `
          /*--- whenever input is checked, target the label---*/
  
            .form-check-input:checked + label{
              background-color : #0b5ed7;
              color : white;
            }
  
            input[type="radio"]{
              display : none;
            }

          `
        }
      </style>

        <div className="form-check">
        <input 
          onClick={() => {
            setPageNumber(1);
            task(items)
          }}
          className="form-check-input" 
          type="radio" 
          name={name} 
          id={`${id} ${name}`} 
          />
        <label 
          className="btn btn-outline-primary" 
          htmlFor={`${id} ${name}`} >
            {items}
        </label>
        </div>
    </div>
  )
}

export default FilterBTN