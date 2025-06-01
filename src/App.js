import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import TopNav from './Components/TopNav';
import Hero from './Components/Hero';
import OrderPage from './Components/Order';
import Contact from './Components/Contact'; 
import AboutUs from './Components/AboutUs'; 
import Bottom from './Components/Bottom';
import './App.css';

function AppContent() {
  const location = useLocation();

  // 👇 Only show TopNav if not on /contact
  const hideTopNav = location.pathname === '/contact';

  return (
    <div className="App">
      {!hideTopNav && <TopNav />}
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
      <Bottom/>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
