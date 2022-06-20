import React from "react";
import './Input.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

function Input(props) {
    const { size = 'medium', searchClick, cancelClick, searchChange, value, selectData,handelOnSelect} = props
    
    return (
        <div className="container">
            <div className={`searchContainer -${size}`}>
                <i className={`bi bi-search ${size}`} onClick={searchClick}></i>
                <select className="selectdiv" onChange={handelOnSelect}>
                    <option disabled={true} value=''>Search By</option>
                    {selectData.map((e)=>{
                        return<option key={e} value={e}>{e}</option>
                    })}
                </select>
                <input className={`input-${size}`} value={value} placeholder="Search..." onChange={searchChange} />
                <i className={`bi bi-x-circle ${size}`} onClick={cancelClick}></i>
            </div>
        </div>
    )
}

export default Input