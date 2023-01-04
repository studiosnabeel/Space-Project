import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Profile from './Components/Profile';
import Missions from './Components/Missions';
import Dragons from './Components/Dragons';
import DisplayRockets from './Components/DisplayRockets';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<DisplayRockets />} />
        <Route path="/rockets" element={<DisplayRockets />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/dragons" element={<Dragons />} />
      </Routes>
    </>
  );
}

export default App;
