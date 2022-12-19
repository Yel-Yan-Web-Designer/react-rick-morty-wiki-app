import React, {useState, useEffect} from 'react';
import styles from './Pagination.module.scss';
import ReactPaginate from 'react-paginate';

const Pagination = ({pageNumber ,setPageNumber, info}) => {
  const [width, setWidth] = useState(window.innerwidth);

  function updateDimensionWidth () {
    setWidth(window.innerWidth);
  }

  // directly manipulate DOM requires useeffect
  useEffect(()=> {
    window.addEventListener('resize', updateDimensionWidth);
    return () => window.removeEventListener('resize', updateDimensionWidth)
  }, [width])

  return (
    <>
      <style jsx="true">
      {`
        @media(max-width : 768px){
          .next,.prev{
            display : none;
          }
        }
      `}
      </style>
        <ReactPaginate
            className="pagination justify-content-center gap-3 my-4"
            pageCount={info ? info.pages : null}
            forcePage = {pageNumber === 1 ? 0 : pageNumber -1}
            nextLabel = "Next"
            previousLabel = "Prev"
            breakLabel	= ". . ."
            previousClassName = 'btn btn-primary prev'
            previousLinkClassName = 'text-white'
            nextClassName = 'btn btn-primary text-danger next'
            nextLinkClassName	 = 'text-white'
            pageClassName='page-item' 
            pageLinkClassName='page-link'
            marginPagesDisplayed = { width < 567 ? 1 : 2}
            pageRangeDisplayed = {width < 567 ? 1 : 2}
            activeClassName='active'
            onPageChange={(data) => {
              setPageNumber(data.selected + 1)
            }}
        />
    </>
  )
}

export default Pagination;

/* 
!----- PAGE COUNT EXPLAIN ------! 
? During first render, info already exist because we get api and put it into api variable and then update with states.
? That's why we can use pageCount = {info.pages} in first render without error
? But when we refresh the page, we get error and that error is "cannot read properties of undefined (reading 'pages)"
? Why we get that error ? cux it takes a little time when we use api,getting api takes time and when we refresh the page
? info is not there yet, that is why we get this error
? if info exist, set pagecount = info.pages which is squal to 42.
? Solution is pageCount  = {info ? info.pages : null}
*/

/*
!------ ON PAGE CHANGE EXPLAIN ------!
? we get data and console.log it and it will give {selected : 1} object which is in array
? In array, it starts to count from zero, we need to start from one that is why add number + 1
? Then update pagenumber with it.
*/

/**
 * !------ FORCE PAGE EXPLAIN -----!
 * ? Why we need force page? The reason is that I am on page number 5 and I use search bar or 
 * ? click filter buttons, I want to set page number to 1 whenever user type on search bar and clicked filter buttons
 * ? That is why forcePage come in and override selected page with parent props
 * ? logic --> if and when page number will be "one", I want the force page to start from zero
 * ?            react paginate start from zero and we are starting from one by adding plus 1 on top of it
 * ?            That is why pageNumber minus one cux we added plus one on top of it before forcePage start.
 */