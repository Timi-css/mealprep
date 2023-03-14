import { Stack } from "@mui/system";
import React from "react";
import "../Styles/Home.css";
import heroImage from "../Utils/hero.png";
const Home = () => {
  return (
    <Stack>
      <div className="home-main-box">
        <div className="home-left">
          <h1 className="home-header">
            We Offer Delicious <br></br> Food and Quick Service
          </h1>
          <p className="hero-details">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
            debitis earum! Officiis, numquam <br></br>optio minus quia expedita
            mollitia temporibus similique!
          </p>
          <button className="hero-cta">Get Started</button>
          <div className="numbers-box">
            <div className="numbers-one-box">
              <h4 className="numbers-header">200</h4>

              <span className="numbers">Order Running</span>
            </div>
            <div className="numbers-one-box">
              <h4 className="numbers-header">400</h4>
              <span className="numbers">Restudent Here</span>
            </div>
            <div className="numbers-one-box">
              <h4 className="numbers-header">200k</h4>
              <span className="numbers">Complete Order</span>
            </div>
          </div>
        </div>
        <div className="home-right">
          <img src={heroImage} alt="heroimage" height={600} />
        </div>
      </div>
    </Stack>
  );
};

export default Home;
