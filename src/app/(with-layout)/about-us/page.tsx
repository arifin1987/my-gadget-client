import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "My-Gadget | About Us",
  description: "Generated by create next app",
};
const AboutUsPage = () => {
  return (
    <div>
      <h1 className="text-4xl text-accent text-center my-4 border-y-2 border-emerald-400 w-[25%]  py-2 ">
        About Us
      </h1>
      <p className="border border-emerald-400 p-4 my-8 shadow-md shadow-emerald-200">
        My gadget has been founded on 1 March 2007. From then to now, Star Tech
        has won the heart of many people and now is a country-wide renowned
        brand. That has been possible due to the hard work Star Tech has done to
        satisfy its customers. Having the aim to satisfy customers, providing
        customers with their required products, and being true to their motto,
        “Customers Come First,” has brought Star Tech to the top choice for
        E-Commerce Sites in Bangladesh and is recognized as the largest Computer
        and Tech retailer. Star Tech has over 700 employees and is growing more
        and more, working diligently to fulfill the Main Criteria of my gadget
        Motto or Vision. Star Tech is located in 6 Central territories in Dhaka,
        Gazipur, Chattogram, Khulna, Rajshahi, and Rangpur. Star Tech has a
        total of 17 Physical outlets all over the country; selling genuine Tech
        products. Among them, 9 outlets are in Dhaka as it’s the capital city.
        Star Tech also has two branches in Chittagong; the commercial capital of
        Bangladesh.
      </p>
    </div>
  );
};

export default AboutUsPage;
