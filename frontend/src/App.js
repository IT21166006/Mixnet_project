import { Route, Routes } from 'react-router-dom';



//Bussiness Managment System
import CreateBusinessProfile from './components/BusinessManagmentSystem/CreateBusiProf';
import BusinessProfile from './components/BusinessManagmentSystem/BusinessProfile';

//CSS for Main Systems
import './Styles/styles-business.css';

//
function App() {
  return (
    <div className="App">

      <Routes>

        {/* Bussiness Managment System */}
        <Route path='/createprofile' exact element={<CreateBusinessProfile />}></Route>
        <Route path='/profile/:email' exact element={<BusinessProfile />}></Route>
      </Routes>

    </div>
  );
}

export default App;

