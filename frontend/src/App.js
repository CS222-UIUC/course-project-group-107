

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
          <Route path='/Home' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/Live' component={Live} />
          <Route path='/login' component={Login} />
          <Route path='/insight' component={Insight}/>
        </Routes>
      </Router> 
);
}
export default App;
