import FlashSale from "@/components/FlashSale/FlashSale";
import MostPopularProducts from "@/components/MostPopularProducts/MostPopularProducts";
import TopCategories from "@/components/TopCategories/TopCategories";
import Banner from "@/components/shared/Banner";
import { TLaptop } from "@/types";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My-Gadget | Home",
  description: "Generated by create next app",
};
const HomePage = async () => {
  const res = await fetch("http://localhost:5000/laptop", {
    next: {
      revalidate: 30,
    },
  });
  const data = await res.json();

  return (
    <div>
      <Banner />
      <FlashSale data={data} />
      <TopCategories data={data} />
      <MostPopularProducts data={data} />
    </div>
  );
};

export default HomePage;
