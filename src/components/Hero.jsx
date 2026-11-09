import React from "react";
import swiggy from "../Images/swiggy.webp";
import zomato from "../Images/zomato.webp";
import kfc from "../Images/kfc_png.webp";

const Hero = () => {
  return (
    <section className="hero">
      <div className="left">
        <h1 className="title">TASTE THE BEST KFC CHICKEN.</h1>
        <p>
          Harland Sanders started selling fried chicken in Corbin, Kentucky
          in 1930. Today KFC is one of the most recognised fast-food brands
          in the world, famous for its secret blend of 11 herbs and spices.
        </p>
        <div className="btns">
          <button className="btn1">ORDER NOW</button>
          <button className="btn2">VIEW MENU</button>
        </div>
        <div className="social">
          <span className="social-1">Also Available on</span>
          <div className="social-icons">
            <img src={swiggy} alt="Swiggy" />
            <img src={zomato} alt="Zomato" />
          </div>
        </div>
      </div>
      <div className="right">
        <img src={kfc} alt="KFC chicken bucket" />
      </div>
    </section>
  );
};

export default Hero;