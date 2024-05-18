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
        <Image
          src={img1}
          width={200}
          height={50}
          quality={80}
          alt="this is a image"
        />
      </div>
      <div>
        <Image
          src={
            "https://img.freepik.com/premium-photo/vintage-camera-with-laptop-computer-white-blank-screen-wood-work-table-front-view_34008-319.jpg?w=740"
          }
          width={200}
          height={50}
          quality={80}
          alt="this is a image"
        />
      </div>
      <div>
        <Image
          src={
            "https://img.freepik.com/free-psd/elegant-computer-mockup_1310-736.jpg?w=740&t=st=1716065909~exp=1716066509~hmac=50433717a49461e6499bb523ff42e5941b2d3cd452e7e6f7b8eaa36eb7559d23"
          }
          width={200}
          height={50}
          quality={80}
          alt="this is a image"
        />
      </div>
    </Carousel>
  );
};

export default Banner;
