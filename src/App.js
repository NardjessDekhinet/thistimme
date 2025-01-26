
import './App.css';
import Signup from './signup/signup';
import Navbar from './navbar/navbar';
import Signin from './signin/signin';
import ForgotPassword from "./ForgotPassword/ForgotPassword";
import Offres from './offres/offres';
import Book from './BookProcess/book';
import HistoriqueDesServices from './historiquedesservices/historique';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Routes
import PortfolioPage from './portfoliopage/portfoliopage';
import "./i18n"; 
import { useEffect } from 'react';
import { useTranslation } from "react-i18next";
import Payment from "../src/payment/payment"



function App() {
  const { i18n } = useTranslation();
  useEffect(() => {
    document.documentElement.lang = i18n.language;
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);




  return (
    <div className="App">
        
   <Router>
        <Routes>
        <Route path="/" element={<Navbar />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/Signup" element={<Signup />} />
        <Route path="/offres" element={<Offres />} />
        <Route path="/book" element={<Book/>} />
        <Route
  path="/historique" element={<HistoriqueDesServices></HistoriqueDesServices>}
/>
      <Route path="/portfolio/:name" element={<PortfolioPage/>}/>
      <Route path="/payment" element={<Payment/>}/>
        </Routes>
      </Router>
   
    </div>
  );
}

export default App;
