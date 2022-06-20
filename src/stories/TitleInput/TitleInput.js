import React from "react";
import './TitleInput.css'

function TitleInput(props){
    const { size = 'medium',handelChange,placeHolder,value,error,type} = props
    return (
        <div className="InputContainer">
            <div className="InputTitle">
            <input className={`title title-${size}`} type={type} onChange={handelChange} placeholder={placeHolder?`${placeHolder}`:''} value={value}/>
            </div>
            <span className={`error error-${size}`}>{error}</span>
        </div>
    )
}
export default TitleInput