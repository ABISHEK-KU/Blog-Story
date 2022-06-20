import React from "react";
import '../Style/StoryCreate.css';
import TitleInput from '../stories/TitleInput/TitleInput';
import MarkDownEditorDisplay from '../stories/MarkDownEditorDisplay/MarkDownEditorDisplay'
import Button from "../stories/Button/Button";
const StoryCreate = (props) => {
    const handelSearch = (e) => {
        alert(`${e.target.value}`)
    }
    return (
        <div>
            <div className="inputCont">
                <TitleInput size='medium' handelChange={handelSearch} placeHolder='Enter Title' value={'data'} error={''} />
            </div>
            <div className="textCont">
                <MarkDownEditorDisplay size='large' handelChange={''} markDown={'heading'} />
            </div>
            <div className="ButtonCont">
            <Button variant={`primary`} children={`Publish`}/>
            </div>
        </div>
    )
}
export default StoryCreate