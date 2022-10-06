import './App.css';
import './index.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/index';
import About from './pages/about';
import Live from './pages/Live'

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
      <div className='App-header'>
        Welcome to our website for live ARC capacities
      </div>
    </div>
    
    
    
);
}
export default App;
