
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import LoginTsx from "./components/Login";
/* import EmployeeReg from './pages/Employee_registration/Employee_reg'
import InviteReg from './pages/Employee_registration/Employee_invite'
import RegModal from './pages/Employee_registration/Employee_modal'
import RegModal3 from './pages/Employee_registration/Employee_modal3.jsx'
import LoginPage from './pages/Manager_login/login.jsx'
import ContactVerification from './pages/Manager_login/ContactVerification.jsx' */
import ChangePassword from "./components/changePassword.js";
// import ContactModal from './pages/Manager_login/ContactModal'
/* import FindId from './pages/Manager_login/ContactIdCheck'
import PwReset from './pages/Manager_login/ContactPwReset' */

function App() {

  return (
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
        
      </Routes>
    </Router>
  )
}

export default App
