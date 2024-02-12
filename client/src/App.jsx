
import FrontPage from './views/FrontPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useAuth } from './AuthContext';
import LoginPage from './views/LoginPage';
import RegisterPage from "./views/RegisterPage";
import ContactUs from "./views/ContactUs"
import InfoView from "./views/InfoView"
import Quiz from './components/Quiz';
import AirView from './views/AirView';
import WaterView from './views/WaterView';
import EarthView from './views/EarthView';
import AnimalsView from './views/AnimalsView';

function App() {

  const { user } = useAuth();
  const token = localStorage.getItem('token');

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FrontPage user={user} />} />
        <Route path="*" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/info" element={<InfoView />} />

        <Route path="/air" element={<AirView />} />
        <Route path="/water" element={<WaterView />} />
        <Route path="/earth" element={<EarthView />} />
        <Route path="/animals" element={<AnimalsView />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
