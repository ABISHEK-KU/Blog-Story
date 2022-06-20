import React from "react";
import '../Style/StoryPublish.css'
import MarkDownViewer  from '../stories/MarkDownViewer/MarkDownViewer'

const StoryPublish=(props)=>{
  const data=JSON.parse(localStorage.getItem('markDown'))===null?[]:JSON.parse(localStorage.getItem('markDown'))
  
  const handelDelete=(id)=>{
    const deleteData=data.filter((e)=>{
      return
    })
  }
  }

  const handelEdit=(id)=>{

  }


  return (
    <div className='markDownViewer'>
      {(data.length<=0)?<p className="empty">No Post Available Pls Create Post</p>:data.map((e)=>{
        return (
          <div>
            <div className="Edit-icon">
            <i class="bi bi-trash-fill icon" onClick={handelDelete(e.id)}></i>
            <i class="bi bi-pencil-square icon" onClick={handelEdit(e.id)}></i>
            </div>
            <MarkDownViewer markDownTitle={e.title} markDownData={e.markDownData}/>
          </div>
        )
      })}
    </div>
  );
}
export default StoryPublish