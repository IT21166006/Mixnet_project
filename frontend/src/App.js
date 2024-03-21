import { Route, Routes } from 'react-router-dom';



//User Managmet System

import Createitem from './components/GenaralUser/Createitem'


//
function App() {
  return (
    <div className="App">
     
      

          <Routes>

            {/* Genaral User */}
            <Route path='/ceateitem' exact element={<Createitem />}/>
          </Routes>
        
    
    </div>
  );
}

export default App;

