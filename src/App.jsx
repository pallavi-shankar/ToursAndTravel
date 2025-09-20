import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Payment from "./components/Payment";
import Success from "./pages/Success";


function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/payment" element={<Payment />} /> 
         <Route path="/success" element={<Success />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;