import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Profile from './Components/Profile';
import DisplayRockets from './Components/Rockets/DisplayRockets';
import DisplayDragons from './Components/Dragons/DisplayDragons';
import MissionsPage from './Components/Missions/missionsPage';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<DisplayRockets />} />
        <Route path="/rockets" element={<DisplayRockets />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/missions" element={<MissionsPage />} />
        <Route path="/dragons" element={<DisplayDragons />} />
      </Routes>
    </>
  );
}

export default App;
