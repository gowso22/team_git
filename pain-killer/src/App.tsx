
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import EmployeeReg from './pages/Employee_registration/Employee_reg'
import InviteReg from './pages/Employee_registration/Employee_invite'
import RegModal from './pages/Employee_registration/Employee_modal'


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<EmployeeReg/>}></Route> {/* 직원등록 */}
        <Route path="/invite" element={<InviteReg/>}></Route> {/* 직원초대 */}
        <Route path="/modal" element={<RegModal/>}></Route> {/* 직원등록 다이얼로그 */}
        

       
      </Routes>
    </Router>
  )
}

export default App
