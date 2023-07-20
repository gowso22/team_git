import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
// import Test from './Test';
import Home from './pages/home/home';
import Mypage from './pages/mypage/mypage';
import CalendarManager from './pages/schedule/calendar-manager';
import CalendarEmployee from './pages/schedule/calendar-employee';

function App() {
  return (
    <>
      {/* <Home /> */}
      {/* <Mypage /> */}
      <CalendarManager />
      {/* <CalendarEmployee /> */}
      {/* <Test /> */}
    </>
  );
}

export default App;
