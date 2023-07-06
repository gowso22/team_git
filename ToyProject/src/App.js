import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/home';
import Login from './components/login';
import SubscribeList from './components/subscribeList';
import CafeList from './components/cafeList';

function App() {

  

  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/subscribeList' element={<SubscribeList/>}/>
          <Route path='/cafeList' element={<CafeList/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
