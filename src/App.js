import './App.css';
import Input from './stories/Input/Input';
import StoryCreate from './Components/StoryCreate';
import StoryPublish from './Components/StoryPublish';
import NavBar from './Components/NavBar';
import { Route } from 'react-router-dom';

const App=(props)=> {
  const handelSearch=()=>{
    alert('search')
  }
  const handelCancel=()=>{
    alert('cancel')
  }
  return (
    <div>
      <Input size='large' searchClick={()=>{handelSearch()}} cancelClick={()=>{handelCancel()}} searchChange={console.log('data')} value={`search`}/>
      <NavBar/>
      <Route path='/post' component={StoryCreate} exact={true}/>
      <Route path='/published' component={StoryPublish} exact={true}/>
    </div>
  );
}

export default App;
