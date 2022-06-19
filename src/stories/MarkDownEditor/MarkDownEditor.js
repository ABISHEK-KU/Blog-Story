import React, { useState } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import './MarkDownEditor.css'

function MarkDownEditor(props){
    const[markDown,setMarkDown]=useState('Heading')

    const {size='medium', rest}=props

    const handelChange=(e)=>{
        setMarkDown(e.target.value)
    }

    return(
        <div className={`markdown__container ${size}`}>
        <textarea
          value={markDown}
          onChange={handelChange}
        />
        <ReactMarkdown source={markDown} className="markdown__preview" />
      </div>
    )
}

export default MarkDownEditor