import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import './MarkDownEditorDisplay.css'

function MarkDownEditorDisplay(props) {

  const { size = 'medium', markDown ,handelChange } = props 

  return (
    <div className="markdown__container">
      <div>
      <textarea value={markDown} className={`--${size}`} onChange={handelChange}/>
      </div>
      <div>
      <article className="content">
        <ReactMarkdown className={`markdown__preview --${size}`}>{markDown}</ReactMarkdown>
      </article>
      </div>
    </div>
  )
}

export default MarkDownEditorDisplay