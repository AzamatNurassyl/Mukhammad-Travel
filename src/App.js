import "./styles/main.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/media.css";

import ScrollToTop from "./utils/scrollTop";

import Activities from "./pages/activities";
import Footer from "./components/footer/footer";
import Home from "./pages/Home";
import Hotel from "./pages/Hotel";
import AboutUs from "./pages/AboutUs";
import Contacts from "./pages/Contacts";
import Destination from "./pages/destination";








function App() {
  return (
    <div className="App">
    
      <Router>
        
        <ScrollToTop/>
        <Routes>

           <Route path="/" element={<Home />}/>
           <Route path="/Hotel" element={<Hotel/>}/>
           <Route path="/AboutUs" element={<AboutUs />}/>
           <Route path="/Activities" element={<Activities />}/>
           <Route path="/Destination" element={<Destination />}/>
           <Route path="/Contacts" element={<Contacts />}/>

        </Routes>
      <Footer/>
     
       </Router>
    </div>
  );
}

export default App;
