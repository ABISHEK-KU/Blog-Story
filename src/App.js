import React, { useReducer } from 'react';
import './App.css';
import Input from './stories/Input/Input';
import StoryCreate from './Components/StoryCreate';
import StoryPublish from './Components/StoryPublish';
import NavBar from './Components/NavBar';
import { Route } from 'react-router-dom';

const initialState = {
  search: '',
  searchBy: ''
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SEARCH': {
      return { ...state, search: action.payload }
    }
    case 'CLEAR_SEARCH': {
      return { ...state, search: '' }
    }
    case 'SEARCH_BY': {
      return { ...state, searchBy: action.payload }
    }
    default: {
      return { ...state }
    }
  }
}

const App = (props) => {
  const [data, dispatch] = useReducer(reducer, initialState)

  const selectData = ['Search By Title', 'Search By Post']

  console.log(data.searchBy)

  const handelSearch = (e) => {
    dispatch({
      type: 'SET_SEARCH',
      payload: e.target.value
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
      <Input size='large'
        searchClick={''}
        cancelClick={handelCancel}
        searchChange={(e) => {handelSearch(e)}}
        handelOnSelect={(e) => {handelSelect(e)}}
        value={data.search}
        selectData={selectData} />
      <NavBar />
      <Route path='/post' component={StoryCreate} exact={true} />
      <Route path='/published' component={StoryPublish} exact={true} />
    </div>
  );
}

export default App;
