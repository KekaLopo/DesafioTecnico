import React from 'react';

import "./styles.css";


const Pagination = (props) => {
const pageLinks = []
for(let i = 1; i<=5; i++){
  let active = props.currentPage === i ? 'active' : '';

  pageLinks.push(<li className={`${active}`} key={i} onClick={() => props.nextPage(i)}><a href="#">{i}</a></li>)
}

return(
  <div id="menu">
    <div id="table">
      <ul id="horizontal-list">
       <li id="horizontal-list">{pageLinks}</li> 
      </ul>
    </div>
  </div>
)

} 


export default Pagination;