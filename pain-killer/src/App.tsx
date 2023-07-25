import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/Manager_login/login';
import Home from './pages/home/home';
import Layout from './components/layout/Layout';
import CalendarManager from './pages/schedule/calendar-manager';
//import CalendarEmployee from './pages/schedule/calendar-employee';
import MemberManage from './pages/member/MemberManage';
import Mypage from './pages/mypage/mypage';
import CenterManage from './pages/center/CenterManage';

import WeekCalendar from './components/week-calendar';
import EmpDetail from './pages/center/EmpDetail';
import CreateEmp from './pages/center/CreateEmp';
import ModEmpInfo from './pages/center/ModEmpInfo';
import LoginTsx from './components/Login';
import ChangePassword from './components/changePassword';
import SimpleLoginPage from './pages/simple_login/simpleLogin';
import UserDetailPage from './pages/simple_login/userDetail';
import MemberManagementPage from './pages/Member_Management/memberManage';
import TicketPage from './pages/Member_Management/ticketPage';
import TicketDetailPage from './pages/Member_Management/ticketDetail';
import TicketAllocationPage from './pages/Member_Management/ticketAllocation';
import EditTicketPage from './pages/Member_Management/editTicket';
import MyPage from './pages/mypage/myPage1';
import ChangePwd from './pages/Manager_login/ChangePwd';
import ModRole from './pages/center/ModRole';
import SearchResult from './components/searchResult';

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
          </Route>

          {/*nav, footer 포함하지 않는 컴포넌트는 여기 */}
          <Route path="/" element={<LoginPage />} />
          <Route path="/centerInfo/:userId" element={<EmpDetail />} />
          <Route path="/modemp/:userId" element={<ModEmpInfo />} />
          <Route path="/addemp" element={<CreateEmp />} />
          <Route path="/changepwd" element={<ChangePwd />} />
          {/* <Route path="/test" element={<WeekCalendar />} /> */}

          {/* 직원 역할 수정 페이지*/}
          <Route path="/modrole/:userId" element={<ModRole />} />

          <Route path="/search" element={<SearchResult />} />

          {/* 박재형 : 어디 둬야 할지 몰라서 여기에 두었음, 디자인만 약소하게 구현되어 있으며 아직 데이터 넣는 것은 못해봄*/}
          {/* 직원로그인 */}
          <Route path="/login" element={<LoginTsx />} />

          {/* 비밀번호변경 페이지 */}
          <Route path="/change" element={<ChangePassword />} />

          {/*  간편로그인 페이지 */}
          <Route path="/simple" element={<SimpleLoginPage />} />

          {/* 간편로그인 후 키패드 호출 페이지 */}
          <Route path="/udetail" element={<UserDetailPage />} />

          {/* 회원관리 */}
          <Route path="/member" element={<MemberManagementPage />} />

          {/* 수강권조회 */}
          <Route path="/ticket" element={<TicketPage />} />

          {/* 수강권상세 */}
          <Route path="/tdetail" element={<TicketDetailPage />} />

          {/* 수강권부여 */}
          <Route path="/tallocate" element={<TicketAllocationPage />} />

          {/* 수강권수정 */}
          <Route path="/edit" element={<EditTicketPage />} />

          <Route path="/mPage" element={<MyPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
