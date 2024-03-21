import { Route, Routes } from 'react-router-dom';



//Consultant Managment System
import DelDashboard from './components/DeliveryManagementSystem/DelDashboard';
import Register from './components/DeliveryManagementSystem/Register';
import DeliveryProfile from './components/DeliveryManagementSystem/DeliveryProfile';
import Allorders from './components/DeliveryManagementSystem/Allorders';
import AddAppointment from './components/DeliveryManagementSystem/AddAppointment';
import DeliveryLogin from './components/DeliveryManagementSystem/DeliveryLogin';
import Edit from './components/DeliveryManagementSystem/Edit';
import Genreport from'./components/DeliveryManagementSystem/Reportgen';




import './Styles/style-consultant.css';

//
function App() {
  return (
    <div className="App">
      <Header/>
      

          <Routes>

            



           



            {/* Consaltant Managment System */}
            <Route path = '/deldashboard' exact element = {<DelDashboard/>} ></Route>
            <Route path = '/Delregister' exact element = {<Register/>} ></Route>
            <Route path = '/profile/:id' exact element = {<DeliveryProfile/>}></Route>
            <Route path = '/editnow/:id' exact element = {<Edit/>}></Route>
            <Route path = '/order' exact element = {<Allorders/>}></Route>
            <Route path = '/deladd' exact element = {<AddAppointment/>}></Route>
            <Route path = '/dellogin' exact element = {<DeliveryLogin/>}></Route>
            <Route path = '/delreport' exact element = {<Genreport/>}></Route>


            
            
          </Routes>
          <Footer/>
    
    </div>
  );
}

export default App;

