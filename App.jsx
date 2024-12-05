// App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import UserOptions from "./components/UserOptions";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <HeroSection />
      <UserOptions />
      <Footer />
    </div>
  );
};

export default App;
