
import './App.css'
import EmployeeReg from './pages/Employee_registration/Employee_reg'
import InviteReg from './pages/Employee_registration/Employee_invite'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<EmployeeReg/>}></Route> {/* 직원등록 */}
        <Route path="/invite" element={<InviteReg/>}></Route> {/* 직원초대 */}
        

       
      </Routes>
    </Router>
  )
}

export default App
