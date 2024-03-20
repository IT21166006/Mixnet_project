import { Route, Routes } from 'react-router-dom';

//Admin Managment System
import ProfileAdmin from './components/AdminManagementSystem/ProfileAdmin';
import ManageAdmin from './components/AdminManagementSystem/ManageAdmin';
import AdminDashboard from './components/AdminManagementSystem/AdminDashboard';
import EditAdmin from './components/AdminManagementSystem/EditAdmin';
import AdminRepogen from './components/AdminManagementSystem/AdminReportfenarator';
import Header from './components/Header';
import AdminLogin from './components/AdminManagementSystem/AdminLogin';
import CustomerReportAdmin from './components/AdminManagementSystem/CustomerReportAdmin';
import DeliveryReportAdmin from './components/AdminManagementSystem/DeliveryReportAdmin';
import FarmerReportAdmin from './components/AdminManagementSystem/FarmerReportAdmin';

//Bussiness Managment System
import CreateBids from './components/BiddingManagmentSystem/CreateBids';
import BiddingDetailsFarmer from './components/BiddingManagmentSystem/BiddingDetailsFarmer';
import SetPrice from './components/BiddingManagmentSystem/SetPrice';
import BidReport from './components/BiddingManagmentSystem/BidReport';
import SelectedBid from './components/BiddingManagmentSystem/SelectedBid';
import BidReportAdmin from "./components/BiddingManagmentSystem/BidReportAdmin";
import BidDetails from "./components/BiddingManagmentSystem/BidDetails";
import BidDetailsFarmer from './components/BiddingManagmentSystem/BidDetailsFarmer';
import Home from "./components/Home";
import BidStore from './components/BiddingManagmentSystem/BidStore';

//Employee Management System
import AddStock from "./components/StockManagement/AddStock";
import ManageItems from "./components/StockManagement/ManageItems";
import EditStock from './components/StockManagement/EditStock';
import InStock from './components/StockManagement/InStock';
import Stockreport from './components/StockManagement/Reportgenarate';
import StockDashboard from "./components/StockManagement/StockDashboard";

//Consultant Managment System
import DelDashboard from './components/DeliveryManagementSystem/DelDashboard';
import Register from './components/DeliveryManagementSystem/Register';
import DeliveryProfile from './components/DeliveryManagementSystem/DeliveryProfile';
import Allorders from './components/DeliveryManagementSystem/Allorders';
import AddAppointment from './components/DeliveryManagementSystem/AddAppointment';
import DeliveryLogin from './components/DeliveryManagementSystem/DeliveryLogin';
import Edit from './components/DeliveryManagementSystem/Edit';
import Genreport from'./components/DeliveryManagementSystem/Reportgen';

//User Managmet System
import Offertable from './components/OfferManagmentSystem/OfferTable';
import UpdateOffer from './components/OfferManagmentSystem/UpdateOffer';
import OfferPdf from './components/OfferManagmentSystem/OfferPdf';
import CreateOffer from './components/OfferManagmentSystem/CreateOffer';
import Store from './components/store';
import './App.css';

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

            {/*Admin Managment System*/}
            <Route path='/createadmin' exact element={<ProfileAdmin/>}></Route>
            <Route path='/ManageAdmin' exact element={<ManageAdmin/>}></Route>
            <Route path='/AdminDashboard/:id' exact element={<AdminDashboard/>}></Route>
            <Route path='/EditAdmin/:id' exact element={<EditAdmin/>}></Route>
            <Route path='/Adminreport' exact element={<AdminRepogen/>}></Route>
            <Route path='/admin' exact element={<AdminLogin/>}></Route>
            <Route path='/reportGenCus' exact element={<CustomerReportAdmin/>}></Route>
            <Route path = '/adminDelreport' exact element = {<DeliveryReportAdmin/>}></Route>
            <Route path = '/adminfarmerreport' exact element = {<FarmerReportAdmin/>}></Route>
            <Route path = '/genaratereportbidAdmin' exact element = {<BidReportAdmin/>}></Route>



            {/* Bussiness Managment System */}
            <Route path = '/createbid/:idNo' exact element = {<CreateBids/>}></Route>
            <Route path = '/biddetails' exact element = {<BiddingDetailsFarmer/>}></Route>
            <Route path = '/setpricebid/:bidID' exact element = {<SetPrice/>}></Route>
            <Route path = '/selectedbid/:id' exact element = {<SelectedBid/>}></Route>
            <Route path = '/genaratereportbid/:idNo' exact element = {<BidReport/>}></Route>
            <Route path = '/biddetails/:id' exact element = {<BidDetails/>}></Route>
            <Route path = '/biddetailsfarmer/:id' exact element = {<BidDetailsFarmer/>}></Route>
            <Route path = '/bidstore' exact element = {<BidStore/>}></Route>


            {/* Employee Managmen System */}
            <Route path='/AddStock' element={<AddStock/>} />
            <Route path='/StockDashboard' element={<StockDashboard/>} />
            <Route path='/EditStock/:id' element={<EditStock/>} />
            <Route path='/StockManageItems' element={<ManageItems/>} />
            <Route path='/Stockreport' element={<Stockreport/>} />
            <Route path='/InStock' element={<InStock/>} />



            {/* Consaltant Managment System */}
            <Route path = '/deldashboard' exact element = {<DelDashboard/>} ></Route>
            <Route path = '/Delregister' exact element = {<Register/>} ></Route>
            <Route path = '/profile/:id' exact element = {<DeliveryProfile/>}></Route>
            <Route path = '/editnow/:id' exact element = {<Edit/>}></Route>
            <Route path = '/order' exact element = {<Allorders/>}></Route>
            <Route path = '/deladd' exact element = {<AddAppointment/>}></Route>
            <Route path = '/dellogin' exact element = {<DeliveryLogin/>}></Route>
            <Route path = '/delreport' exact element = {<Genreport/>}></Route>


            {/* User Managment System */}
            <Route path='/offertable' exact element={<Offertable/>}/>
            <Route path='/updateoffer/:id' exact element={<UpdateOffer/>}/>
            <Route path='/offerpdf' exact element={<OfferPdf/>}/>
            <Route path='/createoffer' exact element={<CreateOffer/>}/>

            
          </Routes>
          <Footer/>
    
    </div>
  );
}

export default App;

