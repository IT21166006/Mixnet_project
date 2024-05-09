import { Route, Routes } from 'react-router-dom';

import { useHistory } from 'react-router-dom';

//Consultant Managment System
import ConsultantRegister from './components/ConsultantManagementSystem/ConsultantRegister';
import EditProfile from './components/ConsultantManagementSystem/EditProfile';
import ProfileView from './components/ConsultantManagementSystem/ProfileView';
import AnalyticsDashboard from './components/ConsultantManagementSystem/AnalyticsDashboard';

import DeliveryLogin from './components/ConsultantManagementSystem/DeliveryLogin';



//CSS for Main Systems
import './Styles/style-consultant.css';
import AddQualifications from './components/ConsultantManagementSystem/AddQualifications';
import AllConsultant from './components/ConsultantManagementSystem/AllConsultant';
import Check from './components/ConsultantManagementSystem/Check';



//
function App() {
  return (
    <div className="App">

          <Routes>

            {/* Delevery Managment System */}
            <Route path = '/consultReg' exact element = {<ConsultantRegister/>} ></Route>
            <Route path = '/editProfile' exact element = {<EditProfile/>} ></Route>
            <Route path = '/consultprofile' exact element = {<ProfileView/>}></Route>
            <Route path = '/analytics' exact element = {<AnalyticsDashboard/>}></Route>
            <Route path = '/dellogin' exact element = {<DeliveryLogin/>}></Route>
            <Route path = '/addOthers' exact element = {<AddQualifications/>}></Route>
            <Route path = '/all' exact element = {<AllConsultant/>}></Route>
            <Route path = '/ch' exact element = {<Check/>}></Route>
            
            
          </Routes>
    
    </div>
  );
}

export default App;

