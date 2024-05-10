import { Route, Routes } from 'react-router-dom';



//Employee Management System
// import AddStock from "./components/EmployeeManagmentSystem/ViewOrgan";
// import ManageEmployee from "./components/EmployeeManagmentSystem/ManageEmployee
// import InStock from './components/EmployeeManagmentSystem/InStock';
// import Stockreport from './components/EmployeeManagmentSystem/Reportgenarate';
// import StockDashboard from "./components/EmployeeManagmentSystem/StockDashboard";

import AddEmployee from './components/EmployeeManagmentSystem/AddEmployee';
import AddOrg from './components/EmployeeManagmentSystem/AddOrg';
import EditEmployee from './components/EmployeeManagmentSystem/EditEmployee';
import ViewOrg from './components/EmployeeManagmentSystem/ViewOrgan';
import ManageEmployee from './components/EmployeeManagmentSystem/ManageEmployee';
// import manage from './components/EmployeeManagmentSystem/ManageEmployee';
// import ManageEmployee from './components/EmployeeManagment/ManageEmployee.js';




//CSS for Main Systems
// import './Styles/style-admin.css';
// import './Styles/styles-business.css';
// import './Styles/styles-employee.css';
// import './Styles/style-consultant.css';
// import './Styles/styles-user.css';

//
function App() {
  return (
    <div className="App">
          <Routes>
            
            {/* Employee Managmen System */}
            <Route path='/AddEmployee' element={<AddEmployee/>} />
            <Route path='/AddOrg' element={<AddOrg/>} />
            <Route path='/ViewOrgan' element={<ViewOrg/>} />
            <Route path='/EditEmployee/:id' element={<EditEmployee/>} />
            <Route path='/ManageEmployee' element={<ManageEmployee/>} />
            {/* <Route path='/manage' element={<ManageEmployee/>} /> */}

            {/* <Route path='/StockDashboard' element={<StockDashboard/>} /> */}
            
            {/* <Route path='/Stockreport' element={<Stockreport/>} /> */}
           

          </Routes>
    
    </div>
  );
}

export default App;

