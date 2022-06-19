import React from "react";
import './TitleInput.css'

function TitleInput(props){
    const { size = 'medium',handelChange,placeHolder,value,error} = props
    return (
        <div className="InputContainer">
            <div className="InputTitle">
            <input className={`title title-${size}`} onChange={handelChange} placeholder={placeHolder?`${placeHolder}`:''} value={value}/>
            <p className={`error error-${size}`}>{error}</p>
            </div>
        </div>
    )
}
export default TitleInput