import React from "react";
import Navbar from "./components/navbar";
import HeroSection from "./components/heroSection";
import TaskManeger from "./components/taskBoard";
import Footer from "./components/footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col justify-center items-center">
        <HeroSection />
        <TaskManeger />
      </div>

      <Footer />
    </div>
  );
};

export default App;
