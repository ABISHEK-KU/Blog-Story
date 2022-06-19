import './App.css';
import SearchBar from './Components/SearchBar';
import StoryCreate from './Components/StoryCreate';
import StoryPublish from './Components/StoryPublish';
import NavBar from './Components/NavBar';
import { Route } from 'react-router-dom';

const App=(props)=> {
  return (
    <div>
      <SearchBar/>
      <NavBar/>
      <Route path='/post' component={StoryCreate} exact={true}/>
      <Route path='/published' component={StoryPublish} exact={true}/>
    </div>
  );
}

export default App;
