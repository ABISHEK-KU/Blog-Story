import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import './MarkDownViewer.css'

function MarkDownEditor(props) {

  const { size = 'medium', markDownTitle, markDownData } = props 

  return (
    <div>
      <h1 className="ViewerTitle">{markDownTitle}</h1>
      <div className="markdownDisplayCont">
      <article className="contentViewer">
        <ReactMarkdown className={`markdownDisplay -font${size}`}>{markDownData}</ReactMarkdown>
      </article>
    </div>
    </div>
  )
}

export default MarkDownEditor