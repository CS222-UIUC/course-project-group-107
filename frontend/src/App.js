

import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/index';
import About from './pages/about';
import Live from './pages/Live'
import Login from './pages/login';
import Insight from './pages/Insights';
// import logo from './illini_3_15.png';
function App() {
  return (
      <Router>
      <Navbar/> 
        <Routes>
          <Route path='/Home' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/Live' element={<Live/>} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/insight' element={<Insight/>}/>
        </Routes>
      </Router> 
);
}
export default App;
