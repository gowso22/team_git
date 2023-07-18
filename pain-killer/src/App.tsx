import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
// import Test from './Test';
import Home from './pages/home/home';
import Mypage from './pages/mypage/mypage';

function App() {
  return (
    <>
      <Home />
      <Mypage />
      {/* <Test /> */}
    </>
  );
}

export default App;
