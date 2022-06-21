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
  const {filterData}=props

  console.log(filterData)

  const updateData=()=>{
    dispatch({
      type: 'UPDATE_DATA',
      payload:localStorage.getItem('markDown') === null ? [] : JSON.parse(localStorage.getItem('markDown'))
    })
  }
  
  useEffect(()=>{
    updateData()
  },[JSON.parse(localStorage.getItem('markDown')).length])

  const handelDelete = (id) => {
    const deleteData = data.post.filter((e) => {
      return e.id !== id
    })
    localStorage.setItem('markDown', JSON.stringify(deleteData))
    updateData()
  }

  const handelEdit = (e) => {
    props.history.push({ pathname:'/post', state:e })
  }

  const filteredPost=data.post.filter((e)=>{
    if(filterData.searchBy==='Search By Title'){
      return e.title.toLowerCase().includes(filterData.search.toLowerCase())
    }else if(filterData.searchBy==='Search By Post'){
      return e.markDownData.toLowerCase().includes(filterData.search.toLowerCase())
    }else{
      return e
    }

  })

  return (
    <div className='markDownViewer'>
      {(data.post.length <= 0) && <p className="empty">No Post Available Pls Create Post</p>}
      {filteredPost.map((e) => {
        return (
          <div key={e.id}>
            <div className="Edit-icon">
              <i className="bi bi-trash-fill icon" onClick={() => { handelDelete(e.id) }}></i>
              <i className="bi bi-pencil-square icon" onClick={() => { handelEdit(e) }}></i>
            </div>
            <MarkDownViewer markDownTitle={e.title} markDownData={e.markDownData} />
          </div>
        )
      })}
    </div>
  );
}
export default StoryPublish