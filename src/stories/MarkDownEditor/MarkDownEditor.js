import React,{useState} from "react";
import { ReactMarkdown } from "react-markdown";
import './MarkDownEditor.css'

function MarkDownEditor(props){
    const [markdown,setMarkDown]=useState('**markdown')

    const { size = 'medium', rest } = props

    const handelChange=(e)=>{
        setMarkDown(e.target.value)
    }
    
    return(
        <div className={`markdown__container ${size}`}>
            <textarea
            value={markdown} onChange={handelChange}/>
            <ReactMarkdown source={markdown} className='markdown__preview'/>
        </div>
    )
}

export default MarkDownEditor