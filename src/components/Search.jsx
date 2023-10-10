import React, { useState } from 'react'
import "./style/search.css"

const Search = ({onSearchChange}) => {

    const [search, setSearch] = useState('');


    const handleSearchChange = (e) => {
        const newValue = e.target.value;
        setSearch(newValue)
    }

    const handleSearchButton = (e) => {
        const searchValue = search;
        onSearchChange(searchValue)
    }


  return (
    <div className="navbar-wrapper">
        <div className="navbar-name"><h3>RESPONSES FROM PORTFOLIO</h3></div>

        <div className="navbar-component navbar-search"><input type="text" placeholder='Search for message' onChange={handleSearchChange}/></div>

        <div className="navbar-component navbar-button"><button onClick={handleSearchButton}>SEARCH</button></div>
    </div>
  )
}

export default Search