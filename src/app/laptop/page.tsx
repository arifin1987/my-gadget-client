import LaptopCard from "@/components/ui/LaptopCard";
import { TLaptop } from "@/types";
import React from "react";

const LaptopPage = async () => {
  const res = await fetch("http://localhost:5000/laptops/");
  const allLaptop = await res.json();

  return (
    <div>
      <div className=" my-4">
        <h1 className="text-4xl text-accent text-center my-4 border-y-2 border-emerald-400 w-[25%]  py-2 mx-auto ">
          All Laptop
        </h1>
        <p className="w-2/4 mx-auto">
          On the other hand, students or casual users might find joy in a more
          affordable
        </p>
      </div>

      <div className="md:grid grid-cols-3 gap-8">
        {allLaptop.map((laptop: TLaptop) => (
          <LaptopCard key={laptop._id} laptop={laptop} />
        ))}
      </div>
    </div>
  );
};

export default LaptopPage;
