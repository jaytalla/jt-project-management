import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/home-page" element={<HomePage />} />
        <Route path="/login-page" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
