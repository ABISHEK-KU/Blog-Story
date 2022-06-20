import React , {useReducer} from 'react';
import './App.css';
import Input from './stories/Input/Input';
import StoryCreate from './Components/StoryCreate';
import StoryPublish from './Components/StoryPublish';
import NavBar from './Components/NavBar';
import { Route } from 'react-router-dom';

const initialState={

}

const reducer=(state,action)=>{
  switch(action.type){
    case()
  }
}

const App=(props)=> {
  const [data,dispatch]=useReducer(reducer,initialState)

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
  return (
    <div>
      <Input size='large' searchClick={} cancelClick={()=>{handelCancel()}} searchChange={()=>{handelSearch()}} value={`search`}/>
      <NavBar/>
      <Route path='/post' component={StoryCreate} exact={true}/>
      <Route path='/published' component={StoryPublish} exact={true}/>
    </div>
  );
}

export default App;
