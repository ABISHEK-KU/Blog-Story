import React, { useReducer } from "react";
import '../Style/StoryCreate.css';
import TitleInput from '../stories/TitleInput/TitleInput';
import MarkDownEditorDisplay from '../stories/MarkDownEditorDisplay/MarkDownEditorDisplay'
import Button from "../stories/Button/Button";

const initialState = {
    title: '',
    markdown:'# Heading',
    titleError:'',
    MarkDownError:'',
    
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TITLE_DATA': {
            return { ...state, title: action.payload }
        }
        case 'MARKDOWN_DATA':{
            return {...state, markdown:action.payload}
        }
        case 'ERROR_TITLE':{
            return {...state,titleError:action.payload}
        }
        case 'ERROR_MARKDOWN':{
            return {...state,MarkDownError:action.payload}
        }
        case 'PUBLISH_DATA':{
            (localStorage.getItem('markDown')===null)?localStorage.setItem('markDown',JSON.stringify([])):null
            const publishedData=JSON.parse(localStorage.getItem('markDown'))
            localStorage.setItem('markDown',JSON.stringify([action.payload,...publishedData]))
            return {...state,title: '',markdown:'# Heading',titleError:'',MarkDownError:'',}
        }
        default: {
            return { ...state }
        }
    }
}
const StoryCreate = (props) => {
    const [data, dispatch] = useReducer(reducer, initialState)

    const handelSearch = (e) => {
        dispatch({
            type: 'TITLE_DATA',
            payload: e.target.value
        })
    }

    const handelMarkdownValue=(e)=>{
        dispatch({
            type:'MARKDOWN_DATA',
            payload:e.target.value
        })
    }

    const handelPublish=(e)=>{
        e.preventDefault()
        let errorStatus=false
        let existData=JSON.parse(localStorage.getItem('markDown'))!==null && JSON.parse(localStorage.getItem('markDown')).filter((e)=>{
            return e.title===data.title
        })

        if(data.title.length===0){
            errorStatus=true
            dispatch({
                type:'ERROR_TITLE',
                payload:'Title Is Empty Pls Enter Title'
            })
        }else if(data.title.length<3){
            errorStatus=true
            dispatch({
                type:'ERROR_TITLE',
                payload:'Title Is Too Short'
            })
        }else if(data.title.length>50){
            errorStatus=true
            dispatch({
                type:'ERROR_TITLE',
                payload:'Title Is Too Lengthy'
            })
        } else if(existData.length>0){
            errorStatus=true
            dispatch({
                type:'ERROR_TITLE',
                payload:'Title already exist'
            })
        }

        if(data.markdown.length===0){
            errorStatus=true
            dispatch({
                type:'ERROR_MARKDOWN',
                payload:'Input is Empty '
            })
        }

        !errorStatus&& dispatch({
            type:'PUBLISH_DATA',
            payload:{
                id:Date.now(),
                title:data.title,
                markDownData:data.markdown
            }
        })
    }

    return (
        <div>
            <div className="inputCont">
                <TitleInput size='medium' handelChange={(e) => { handelSearch(e) }} placeHolder='Enter Title' value={data.title} error={data.titleError} type={'text'} />
            </div>
            <div className="textCont">
                <MarkDownEditorDisplay size='large' handelChange={(e)=>{handelMarkdownValue(e)}} markDown={data.markdown} error={data.MarkDownError} type={'text'}/>
            </div>
            <div className="ButtonCont">
                <Button variant={`primary`} children={`Publish`} handelClick={handelPublish}/>
            </div>
        </div>
    )
}
export default StoryCreate