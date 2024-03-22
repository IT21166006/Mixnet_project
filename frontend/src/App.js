import { Route, Routes } from 'react-router-dom';



//Bussiness Managment System
import CreateBusinessProfile from './components/BusinessManagmentSystem/CreateBusiProf';
import BiddingDetailsFarmer from './components/BusinessManagmentSystem/BiddingDetailsFarmer';
import SetPrice from './components/BusinessManagmentSystem/SetPrice';
import BidReport from './components/BusinessManagmentSystem/BidReport';
import SelectedBid from './components/BusinessManagmentSystem/SelectedBid';
import BidDetails from "./components/BusinessManagmentSystem/BidDetails";
import BidDetailsFarmer from './components/BusinessManagmentSystem/BidDetailsFarmer';
import BidStore from './components/BusinessManagmentSystem/BidStore';

//CSS for Main Systems
import './Styles/styles-business.css';

//
function App() {
  return (
    <div className="App">

          <Routes>

            {/* Bussiness Managment System */}
            <Route path = '/createprofile' exact element = {<CreateBusinessProfile/>}></Route>
            <Route path = '/biddetails' exact element = {<BiddingDetailsFarmer/>}></Route>
            <Route path = '/setpricebid/:bidID' exact element = {<SetPrice/>}></Route>
            <Route path = '/selectedbid/:id' exact element = {<SelectedBid/>}></Route>
            <Route path = '/genaratereportbid/:idNo' exact element = {<BidReport/>}></Route>
            <Route path = '/biddetails/:id' exact element = {<BidDetails/>}></Route>
            <Route path = '/biddetailsfarmer/:id' exact element = {<BidDetailsFarmer/>}></Route>
            <Route path = '/bidstore' exact element = {<BidStore/>}></Route>
          </Routes>
    
    </div>
  );
}

export default App;

