import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Profile from './Components/Profile';
import Dragons from './Components/Dragons';
import DisplayRockets from './Components/DisplayRockets';
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
        <Route path="/dragons" element={<Dragons />} />
      </Routes>
    </>
  );
}

export default App;
