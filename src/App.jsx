import Header from "./Components/Header";
import Profile from "./Components/Profile";
import Rockets from "./Components/Rockets";
import Missions from "./Components/Missions";
import { Routes,Route } from "react-router-dom";


function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Rockets/>}/>
        <Route path='/rockets' element={<Rockets/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/missions' element={<Missions/>}/>
      </Routes>
    </>
  );
}

export default App;
