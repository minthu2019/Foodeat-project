import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import TopList from "./components/TopList/TopList";
import About from "./components/About/About";
import BgImage from "../src/assets/2.png";
import Service from "./components/Service/Service";

const bgStyle = {
  backgroundImage: `url(${BgImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const App = () => {
  return (
    <div
      style={bgStyle}
      className=" overflow-x-hidden"
    >
      <div className=" min-h-screen bg-white/50 backdrop-blur-3xl">
        <Navbar />
        <Hero />
        <TopList />
        <About />
        <Service/>
      </div>
    </div>
  );
};

export default App;
