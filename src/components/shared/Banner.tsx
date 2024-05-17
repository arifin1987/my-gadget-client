"use client";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import img1 from "../../assets/image/img1.jpg";

import Image from "next/image";

const Banner = () => {
  return (
    <Carousel>
      <div>
        <Image src={img1} width={500} height={500} alt="this is a image" />
      </div>
      <div>
        <Image src={img1} width={500} height={500} alt="this is a image" />
      </div>
      <div>
        <Image src={img1} width={500} height={500} alt="this is a image" />
      </div>
    </Carousel>
  );
};

export default Banner;
