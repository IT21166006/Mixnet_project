import { Route, Routes } from 'react-router-dom';



//Bussiness Managment System
import CreateBusinessProfile from './components/BusinessManagmentSystem/CreateBusiProf';
import BusinessProfile from './components/BusinessManagmentSystem/BusinessProfile';
import MyPostBusiness from './components/BusinessManagmentSystem/MyPostBusiness';
import PostAdvertisement from './components/BusinessManagmentSystem/PostAdvertisement';

//CSS for Main Systems
import './Styles/styles-business.css';

//
function App() {
  return (
    <div className="App">

      <Routes>

        {/* Bussiness Managment System */}
        <Route path='/createprofile' exact element={<CreateBusinessProfile />}></Route>
        <Route path='/profile' exact element={<BusinessProfile />}></Route>
        <Route path='/postad' exact element={<PostAdvertisement />}></Route>
        <Route path='/allpost' exact element={<MyPostBusiness />}></Route>
      </Routes>

    </div>
  );
}

export default App;

