import React, { useState, useEffect } from "react";
// import { Navigation } from "./components/navigation";
// import { Header } from "./components/header";
import { Features } from "./components/features";
import About from "./components/About"
// import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
// import { Testimonials } from "./components/testimonials";
// import { Team } from "./components/Team";
// import { Contact } from "./components/contact";
// import JsonData from "./data/data.json";
// import SmoothScroll from "smooth-scroll";
import "./App.css";
// import SignUp from "./components/SignUp";
// import SignInSide from "./components/SignIn";
// import SubmitReview from "./components/SubmitReview";
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { BrowserRouter ,Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";

// export const scroll = new SmoothScroll('a[href*="#"]', {
//   speed: 1000,
//   speedAsDuration: true,
// });

const App = () => {
  // const [landingPageData, setLandingPageData] = useState({});
  
  
  // useEffect(() => {
  //   setLandingPageData(JsonData);
  // }, []);
  
  return (
    <BrowserRouter>
      <div>
     
        {/* <Navigation />
        <Header data={landingPageData.Header} />
        <About data={landingPageData.About} />
        <Features data={landingPageData.Features} />
        <Gallery data={landingPageData.Gallery} />
        <Testimonials data={landingPageData.Testimonials} />
        <Team data={landingPageData.Team} />
        <Contact data={landingPageData.Contact} /> */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* <Route exact path="/about" element={<About />} />
          <Route exact path="/features" element={<Features />} />
          <Route exact path="/gallery" element={<Gallery />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
