import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import ExpertiseSection from "./components/ExpertiseSection";
import TestimonialsSection from "./components/TestimonialsSection";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Industries from "./components/Industries";
import Clients from "./components/Clients";
import About from "./components/About";
import Insights from "./components/Insights";
import EstimateProject from "./components/EstimateProject";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HeroSection />} />
            <Route path="/expertise" element={<ExpertiseSection />} />
            <Route path="/testimonials" element={<TestimonialsSection />} />
            <Route path="/services" element={<Services />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/about" element={<About />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/EstimateProject" element={<EstimateProject />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
