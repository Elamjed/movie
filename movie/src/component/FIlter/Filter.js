
import React from 'react';
import '../FIlter/Filter.css';
import { Button } from 'react-bootstrap';

const Filter = ({handleSearch, handleSearchrating}) => {
 
 
    return (
<div className="topnav">
  <input onChange={(e)=>handleSearch(e.target.value)}  type="text" placeholder="Search.." className="ser"/>
  <Button  className="btn" variant="primary">Search</Button>
  <input onChange={(e)=>handleSearchrating(e.target.value)}  type="text" placeholder="Search.." className="ser"/>
  <Button  className="btn" variant="primary">Search rating</Button>
</div>

 )
}

export default Filter
