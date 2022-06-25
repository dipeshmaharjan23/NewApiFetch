import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import Navbar from './components/NavBar'
import News from './components/News';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Router>
      <Routes>
        <Route exact path='/' element={< News/>}/>
      </Routes>
    </Router>
   
    </div>
  );
}

export default App;
