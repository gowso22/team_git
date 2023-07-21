
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import './App.css'
import LoginTsx from "./components/Login";
/* import EmployeeReg from './pages/Employee_registration/Employee_reg'
import InviteReg from './pages/Employee_registration/Employee_invite'
import RegModal from './pages/Employee_registration/Employee_modal'
import RegModal3 from './pages/Employee_registration/Employee_modal3.jsx' */
/* import LoginPage from './pages/Manager_login/login.jsx' */
/* import ContactVerification from './pages/Manager_login/ContactVerification.jsx' */
import ChangePassword from "./components/changePassword.js";
import SimpleLoginPage from "./pages/simple_login/simpleLogin.js";
import UserDetailPage from "./pages/simple_login/userDetail.js";
import MemberManagementPage from "./pages/Member_Management/memberManage.js";
import TicketPage from "./pages/Member_Management/ticketPage.js";
import TicketDetailPage from "./pages/Member_Management/ticketDetail.js";
import TicketAllocationPage from "./pages/Member_Management/ticketAllocation.js";
import EditTicketPage from "./pages/Member_Management/editTicket.js";

// import ContactModal from './pages/Manager_login/ContactModal'
/* import FindId from './pages/Manager_login/ContactIdCheck'
import PwReset from './pages/Manager_login/ContactPwReset' */

function App() {

  return (
    // 계속 불러올 컴포넌트는 components 폴더에
    // 페이지 내용에 해당하는 컴포넌트는 pages 폴더에
    
    //  375px~400px
  
    <Router>
      <Routes>
        {/* <Route path="/" element={<EmployeeReg/>}></Route> */} {/* 직원등록 */}
        {/* <Route path="/invite" element={<InviteReg/>}></Route> */} {/* 직원초대 */}
        {/* <Route path="/modal" element={<RegModal/>}></Route> */} {/* 직원등록 다이얼로그 */}
        {/* <Route path="/modal2" element={<RegModal3/>}></Route> */} {/* 직원등록 다이얼로그3 */}

        {/* 관리자 로그인 */}

        {/* <Route path="/managerlogin" element={<LoginPage/>}></Route> */} {/* 관리자 로그인 */}
        {/* <Route path="/contact" element={<ContactVerification/>}></Route> */} {/* 관리자 아이디비번찾기,연락처 인증 */}
        {/* <Route path="/findid" element={<FindId/>}></Route> */} {/* 관리자 아이디 찾기*/}
        {/* <Route path="/pwreset" element={<PwReset/>}></Route> */} {/* 관리자 비밀번호 재설정 */}

        



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
        
      </Routes>
    </Router>
  )
}

export default App
