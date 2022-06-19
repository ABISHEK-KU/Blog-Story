import './App.css';
import SearchBar from './Components/SearchBar';
import StoryCreate from './Components/StoryCreate';

const App=(props)=> {
  return (
    <div>
      <SearchBar/>
      <StoryCreate/>
    </div>
  );
}

export default App;
