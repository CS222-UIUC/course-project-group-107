

import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/index';
import Live from './pages/Live';
import Login from './pages/login';
import Catalog from './pages/catalog';
import Register from './pages/register';
// import logo from './illini_3_15.png';
function App() {
  return (
      <Router>
      <Navbar/> 
        <Routes>
          <Route path='/Home' element={<Home/>} />
          <Route path='/Live' element={<Live/>} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/catalog' element={<Catalog/>}/>
          <Route path='/register' element={<Register/>}/>
        </Routes>
      </Router> 
);
}
export default App;
