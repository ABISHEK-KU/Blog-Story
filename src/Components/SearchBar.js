import React from "react";
import '../Style/SearchBar.css'
const SearchBar = (props) => {

    return (
        <div className="mainSearchContainer">
            <div className="searchContainer">
                <i className="bi bi-search"></i>
                <input className="searchBox" type="search" name="search" placeholder="Search..." />
                <i className="bi bi-x-circle"></i>
            </div>
        </div>
    )
}
export default SearchBar