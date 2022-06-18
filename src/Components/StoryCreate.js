import React from "react";
import '../Style/StoryCreate.css';
import 'bootstrap-icons/font/bootstrap-icons.css'

const StoryCreate = (props) => {
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
export default StoryCreate