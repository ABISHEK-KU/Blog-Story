import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import './MarkDownViewer.css'

function MarkDownEditor(props) {

  const { size = 'medium', markDownData } = props

  return (
    <div>
      <div className="markdownDisplayCont">
        <article className="contentViewer">
          <ReactMarkdown className={`markdownDisplay -font${size}`}>{markDownData}</ReactMarkdown>
        </article>
      </div>
    </div>
  )
}

export default MarkDownEditor