import React from "react";
import '../Style/StoryPublish.css'
import MarkDownViewer  from '../stories/MarkDownViewer/MarkDownViewer'

export default function StoryPublish() {

  return (
    <div className='markDownViewer'>
      <MarkDownViewer markDownData={'# Header'}/>
    </div>
  );
}
