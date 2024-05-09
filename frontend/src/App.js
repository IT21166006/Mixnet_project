import { Route, Routes } from 'react-router-dom';



//Employee Management System
import AddStock from "./components/StockManagement/AddStock";
import ManageItems from "./components/StockManagement/ManageItems";
import EditStock from './components/StockManagement/EditStock';
import InStock from './components/StockManagement/InStock';
import Stockreport from './components/StockManagement/Reportgenarate';
import StockDashboard from "./components/StockManagement/StockDashboard";



//CSS for Main Systems
import './Styles/style-admin.css';
import './Styles/styles-business.css';
import './Styles/styles-employee.css';
import './Styles/style-consultant.css';
import './Styles/styles-user.css';

//
function App() {
  return (
    <div className="App">
      <Header/>
      

          <Routes>

          

            {/* Employee Managmen System */}
            <Route path='/AddStock' element={<AddStock/>} />
            <Route path='/StockDashboard' element={<StockDashboard/>} />
            <Route path='/EditStock/:id' element={<EditStock/>} />
            <Route path='/StockManageItems' element={<ManageItems/>} />
            <Route path='/Stockreport' element={<Stockreport/>} />
            <Route path='/InStock' element={<InStock/>} />
            
          </Routes>
          <Footer/>
    
    </div>
  );
}

export default App;

