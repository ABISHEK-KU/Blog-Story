import React from "react";
import './Input.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

function Input(props) {
    const { size = 'medium', searchClick, cancelClick, searchChange, value, selectData } = props
    return (
        <div className="container">
            <div className={`searchContainer -${size}`}>
                <i className={`bi bi-search ${size}`} onClick={searchClick}></i>
                <select className="selectdiv">
                    <option selected> Select Box </option>
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Last long option</option>
                </select>
                <input className={`input-${size}`} value={value} placeholder="Search..." onChange={searchChange} />
                <i className={`bi bi-x-circle ${size}`} onClick={cancelClick}></i>
            </div>
        </div>
    )
}

export default Input