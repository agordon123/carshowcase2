"use client";
import React from "react";
import Image from "next/image";
import CustomButton from "./CustomButton";
const Hero = () => {
  const handleScroll = () => {};
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find, Book, or Rent a Car - Quickly and Easily!
        </h1>
        <p className="hero__subtitle">
          Streamline your Car Rental Experience with our effortless booking
          process.
        </p>
        <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
          btnType={"button"}
          text=""
        ></CustomButton>
      </div>
      <div className="hero__image-container">
        <div className="hero__image"></div>
      </div>
    </div>
  );
};

export default Hero;
