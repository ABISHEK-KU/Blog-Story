import React from "react";
import './Input.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

function Input(props) {
    const { size = 'medium', searchClick, cancelClick, searchChange, rest } = props

    return (
        <div className="container">
            <div className={`searchContainer -${size}`}>
                <i className={`bi bi-search ${size}`} onClick={searchClick}></i>
                <input className={`input-${size}`} {...rest} placeholder="Search..." onChange={searchChange} />
                <i className={`bi bi-x-circle ${size}`} onClick={cancelClick}></i>
            </div>
        </div>
    )
}

export default Input