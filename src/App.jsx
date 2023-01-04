import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Profile from './Components/Profile';
import Rockets from './Components/Rockets';
import Dragons from './Components/Dragons';
import MissionsPage from './Components/Missions/missionsPage';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/rockets" element={<Rockets />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/missions" element={<MissionsPage />} />
        <Route path="/dragons" element={<Dragons />} />
      </Routes>
    </>
  );
}

export default App;
