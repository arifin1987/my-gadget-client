"use client";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import img1 from "../../assets/image/img1.jpg";
import img2 from "../../assets/image/img2.jpg";
import img3 from "../../assets/image/img3.jpg";

import Image from "next/image";

const Banner = () => {
  return (
    <Carousel>
      <div>
        <Image src={img1} width={700} height={350} alt="this is a image" />
      </div>
      <div>
        <Image src={img2} width={700} height={350} alt="this is a image" />
      </div>
      <div>
        <Image src={img3} width={700} height={350} alt="this is a image" />
      </div>
    </Carousel>
  );
};

export default Banner;
