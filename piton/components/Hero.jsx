import React from "react";
import Image from "next/image";
import firstImage from "../public/hero.jpg";

const Hero = () => {
  return (
    <div className="">
      <Image src={firstImage} layout="responsive" alt="Hero image" />
    </div>
  );
};

export default Hero;
