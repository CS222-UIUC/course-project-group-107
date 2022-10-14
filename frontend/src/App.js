import './App.css';
import './index.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/index';
import About from './pages/about';
import Live from './pages/Live'
import logo from './illini_3_15.png';
function App() {
  return (
    <div>
      <Router>
      <Navbar /> 
        <Routes>
          <Route path='/Home' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/Live' component={Live} />
        </Routes>
      </Router>
      <img src={logo} className=".App-Header" alt="logo"></img>
      <div className='App-header'>
        200/1000 people inside
      </div>
      
    </div>
    
    
    
);
}
export default App;
