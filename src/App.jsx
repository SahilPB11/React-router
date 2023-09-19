import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Componenets/Home";
import Portfolio from "./Componenets/Portfolio";
import About from "./Componenets/About";
import Navigation from "./Componenets/Navigation";
import Contact from "./Componenets/Contact";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigation />} />
        <Route path="/home" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
