import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/About";
import CampaignsPage from "./pages/Campaign";
import ProgramsPage from "./pages/Programs";
import ContactUs from "./pages/Contact";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Router>
        <NavBar className="navBar" />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/campaigns" element={<CampaignsPage />} />
          <Route path="/programs" element={<ProgramsPage />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
