import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import './MarkDownEditorDisplay.css'

function MarkDownEditorDisplay(props) {

  const { size = 'medium', markDown, handelChange, error, type } = props

  return (
    <div className="markdown__container">
      <div className="markdown__SubContainer">
        <div>
          <textarea value={markDown} className={`--${size}`} onChange={handelChange} type={type} />
        </div>
        <div>
          <article className="content">
            <ReactMarkdown className={`markdown__preview --${size}`}>{markDown}</ReactMarkdown>
          </article>
        </div>
      </div>
      <span className="error">{error}</span>
    </div>
  )
}

export default MarkDownEditorDisplay