import React from "react";
import '../Style/StoryCreate.css'
import TitleInput from '../stories/TitleInput/TitleInput';
const StoryCreate = (props) => {
    const handelSearch=(e)=>{
        alert(`${e.target.value}`)
    }
    return (
        <TitleInput size='large' handelChange={handelSearch} placeHolder='Enter Title' value={'data'} error={''} />
    )
}
export default StoryCreate