import React, { useReducer,useEffect} from "react";
import '../Style/StoryPublish.css'
import MarkDownViewer from '../stories/MarkDownViewer/MarkDownViewer'

const initialState = {
  post: localStorage.getItem('markDown') == null ? [] : JSON.parse(localStorage.getItem('markDown')),
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_DATA': {
      return { ...state, post: action.payload }
    }
    default: {
      return { ...state }
    }
  }
}
const StoryPublish = (props) => {
  const [data, dispatch] = useReducer(reducer, initialState)

  const updateData=()=>{
    dispatch({
      type: 'UPDATE_DATA',
      payload:localStorage.getItem('markDown') === null ? [] : JSON.parse(localStorage.getItem('markDown'))
    })
  }
  
  useEffect(()=>{
    updateData()
  },[])

  const handelDelete = (id) => {
    const deleteData = data.post.filter((e) => {
      return e.id !== id
    })
    localStorage.setItem('markDown', JSON.stringify(deleteData))
    updateData()
  }

  const handelEdit = (e,i) => {
    props.history.push({ pathname:'/post', state:{...e,postion:i} })
  }


  return (
    <div className='markDownViewer'>
      {(data.post.length <= 0) ? <p className="empty">No Post Available Pls Create Post</p> : data.post.map((e,i) => {
        return (
          <div key={e.id}>
            <div className="Edit-icon">
              <i className="bi bi-trash-fill icon" onClick={() => { handelDelete(e.id) }}></i>
              <i className="bi bi-pencil-square icon" onClick={() => { handelEdit(e,i) }}></i>
            </div>
            <MarkDownViewer markDownTitle={e.title} markDownData={e.markDownData} />
          </div>
        )
      })}
    </div>
  );
}
export default StoryPublish