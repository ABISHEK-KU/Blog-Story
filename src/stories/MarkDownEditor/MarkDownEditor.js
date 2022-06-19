import React,{useState} from "react";
import { ReactMarkdown } from "react-markdown";

function MarkDownEditor(props){
    const [markdown,setMarkDown]=useState('**markdown')

    const handelChange=(e)=>{
        setMarkDown(e.target.value)
    }
    return(
        <div className="markdown__container">
            <textarea
            value={markdown} onChange={handelChange}/>
            <ReactMarkdown source={markdown} className='markdown__preview'/>
        </div>
    )
}