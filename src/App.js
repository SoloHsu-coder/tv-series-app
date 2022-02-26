
import './App.css';
import Intro from './components/Intro/index';
import 'whatwg-fetch';
import Series from './containers/Series/index';


function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        
       <h1>TV Series List</h1>
      </header>
      <Intro message = "You can find all series here " />
      
      <Series/> 
      
    </div>
  );
}

export default App;
