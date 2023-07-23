import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/Manager_login/login';
import Home from './pages/home/home';
import Layout from './components/layout/Layout';
import CalendarManager from './pages/schedule/calendar-manager';
//import CalendarEmployee from './pages/schedule/calendar-employee';
import MemberManage from './pages/member/MemberManage';
import Mypage from './pages/mypage/mypage';
import CenterManage from './pages/center/CenterManage';
import StudyList from './pages/StudyMangement/StudyList';
import CreateStudy from './pages/StudyMangement/CreateStudy';
import StudyDetails from './pages/StudyMangement/StudyDetails';

import WeekCalendar from './components/week-calendar';
import EmpDetail from './pages/center/EmpDetail';
import CreateEmp from './pages/center/CreateEmp';

function App() {
  return (
    // 계속 불러올 컴포넌트는 components 폴더에
    // 페이지 내용에 해당하는 컴포넌트는 pages 폴더에

    //  375px~400px

    <div className="max-w-[396px] mx-auto relative">
      <Router>
        <Routes>
          {/*nav, footer 포함하는 컴포넌트는 여기 */}
          <Route element={<Layout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/scheduleInfo" element={<CalendarManager />} />
            <Route path="/memberInfo" element={<MemberManage />} />
            <Route path="/centerInfo" element={<CenterManage />} />
            <Route path="/myPage" element={<Mypage />} />
            <Route path="/studylist" element={<StudyList />} />
            <Route path="/create" element={<CreateStudy />} />
          </Route>

          {/*nav, footer 포함하지 않는 컴포넌트는 여기 */}
          <Route path="/" element={<LoginPage />} />
          <Route path = "/centerInfo/:userId" element={<EmpDetail/>}/>
          <Route path = "/addemp" element={<CreateEmp/>}/>
          <Route path = "/studydetails/:ticketId" element={<StudyDetails/>}/>
          {/* <Route path="/test" element={<WeekCalendar />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
