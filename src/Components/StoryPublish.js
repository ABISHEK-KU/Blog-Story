import React from "react";
import '../Style/StoryPublish.css'
import MarkDownViewer  from '../stories/MarkDownViewer/MarkDownViewer'

export default function StoryPublish() {
  const data=JSON.parse(localStorage.getItem('markDown'))===null?[]:JSON.parse(localStorage.getItem('markDown'))
  return (
    <div className='markDownViewer'>
      {data.map((e)=>{
        return <MarkDownViewer markDownTitle={e.title} markDownData={e.markDownData}/>
      })}
    </div>
  );
}
