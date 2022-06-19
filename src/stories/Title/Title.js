import React from "react";
import './Title.css'

function Title(props){
    const { size = 'medium',handelChange,placeHolder,value,error} = props
    return (
        <div>
            <input className={`title title-${size}`} onChange={handelChange} placeholder={`${placeHolder}`} value={value}/>
            <p>{error}</p>
        </div>
    )
}
export default Title