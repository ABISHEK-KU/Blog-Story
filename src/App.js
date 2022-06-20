import React , {useReducer} from 'react';
import './App.css';
import Input from './stories/Input/Input';
import StoryCreate from './Components/StoryCreate';
import StoryPublish from './Components/StoryPublish';
import NavBar from './Components/NavBar';
import { Route } from 'react-router-dom';

const initialState={
  search:'',
  toggle:false
}

const reducer=(state=initialState,action)=>{
  switch(action.type){
    case 'SET_SEARCH':{
      return {...state,search:action.payload}
    }
    case 'CLEAR_SEARCH':{
      return {...state,search:''}
    }
    case 'SEARCH_TOGGLE':{
      return {...state,toggle:!state.toggle}
    }
    default:{
      return {...state}
    }
  }
}

const App=(props)=> {
  const [data,dispatch]=useReducer(reducer,initialState)
  const selectData=['Search By Title','Search By Post']
  const handelSearch=(e)=>{
    dispatch({
      type:'SET_SEARCH',
      payload:e.target.value
    })
  }
  const handelCancel=()=>{
    dispatch({
      type:'CLEAR_SEARCH'
    })
  }

  const handelSearchToggle=()=>{
    dispatch({
      type:'SEARCH_TOGGLE'
    })
  }

  return (
    <div>
      <Input size='large' 
      searchClick={handelSearchToggle} 
      cancelClick={handelCancel} 
      searchChange={(e)=>{handelSearch(e)}}
      value={data.search}
      selectData={selectData}/>
      <NavBar/>
      <Route path='/post' component={StoryCreate} exact={true}/>
      <Route path='/published' component={StoryPublish} exact={true}/>
    </div>
  );
}

export default App;
