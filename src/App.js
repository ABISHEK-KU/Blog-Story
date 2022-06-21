import React, { useReducer } from 'react';
import './App.css';
import Input from './stories/Input/Input';
import StoryCreate from './Components/StoryCreate';
import StoryPublish from './Components/StoryPublish';
import NavBar from './Components/NavBar';
import { Route,withRouter} from 'react-router-dom';

const initialState = {
  search: '',
  searchBy: '',
  searchData:''
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SEARCH': {
      return { ...state, searchData: action.payload }
    }
    case 'CLEAR_SEARCH': {
      return { ...state, searchData: '',search:''}
    }
    case 'SEARCH_BY': {
      return { ...state, searchBy: action.payload }
    }
    case 'SEARCH':{
      return {...state,}
    }
    default: {
      return { ...state }
    }
  }
}

const App = (props) => {
  const [data, dispatch] = useReducer(reducer, initialState)

  const selectData = ['Search By Title', 'Search By Post']

  const handelSearch = (e) => {
    dispatch({
      type: 'SET_SEARCH',
      payload: e.target.value
    })
  }

  const handelClickSearch=()=>{
    dispatch({
      type:'SEARCH',
      payload:data.searchData,
    })
  }
  const handelCancel = () => {
    dispatch({
      type: 'CLEAR_SEARCH'
    })
  }

  const handelSelect = (e) => {
    dispatch({
      type: 'SEARCH_BY',
      payload: e.target.value
    })
  }

  return (
    <div>
      <Input size='medium'
        searchClick={handelClickSearch}
        cancelClick={handelCancel}
        searchChange={(e) => {handelSearch(e)}}
        handelOnSelect={(e) => {handelSelect(e)}}
        value={data.searchData}
        selectData={selectData} />
      <NavBar />
      <Route path='/post' component={StoryCreate} exact={true} />
      <Route path ='/published' render={(props)=>{
            return <StoryPublish
            filterData={data}
            {...props}
         />
        }} exact={true}/>
    </div>
  );
}

export default withRouter(App);
