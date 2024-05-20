"use client";

import { TLaptop } from "@/types";

import { useRouter } from "next/navigation";

import AsusLaptopCard from "../ui/AsusLaptopCard";
import LenovoLaptopCard from "../ui/LenovoLaptopCard";
import DellLaptopCard from "../ui/DellLaptopCard";

const TopCategories = ({ data }: { data: TLaptop[] }) => {
  const dellLaptops = data.filter((item) => item.brand == "Dell");
  const asusLaptops = data.filter((item) => item.brand == "Asus");
  const lenovoLaptops = data.filter((item) => item.brand == "Lenovo");

  const router = useRouter();
  return (
    <div>
      <h1 className="text-4xl text-accent text-center my-4 border-y-2 border-emerald-400 w-[25%] mx-auto py-2">
        Top Categories
      </h1>
      <p className="w-2/4 mx-auto text-center">
        Laptops have revolutionized the way we interact with technology,
        transforming from clunky briefcase replacements into sleek and powerful
      </p>
      <div className="my-4">
        <div>
          <h1 className="text-2xl text-center text-blue-500">Brand: DELL</h1>
          <div className="md:flex gap-4 my-2">
            {dellLaptops.map((item) => (
              <DellLaptopCard key={item._id} item={item} />
            ))}
          </div>
        </div>
        <div>
          <h1 className="text-2xl text-center text-blue-500">Brand: Asus</h1>
          <div className="md:flex gap-4 my-2">
            {asusLaptops.map((item) => (
              <AsusLaptopCard key={item._id} item={item} />
            ))}
          </div>
        </div>
        <div>
          <h1 className="text-2xl text-center text-blue-500">Brand: Lenovo</h1>
          <div className="md:flex gap-4 my-2">
            {lenovoLaptops.map((item) => (
              <LenovoLaptopCard key={item._id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCategories;
