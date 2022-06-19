import React from "react";
import './Input.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

function Input(props) {
    const { size = 'medium', ...rest } = props

    return (
        <div className={`mainSearchContainer ${size}`}>
            <i className={`bi bi-search ${size}`}></i>
            <input className={`input`} {...rest} placeholder="Search..." />
            <i className={`bi bi-x-circle ${size}`}></i>
        </div>
    )
}

export default Input