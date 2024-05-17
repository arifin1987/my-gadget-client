import FlashSale from "@/components/FlashSale/FlashSale";
import MostPopularProducts from "@/components/MostPopularProducts/MostPopularProducts";
import TopCategories from "@/components/TopCategories/TopCategories";
import Banner from "@/components/shared/Banner";
import { TLaptop } from "@/types";

const HomePage = async () => {
  const res = await fetch("http://localhost:5000/laptops/");
  const data = await res.json();
  const flashSale = data.filter((sale: TLaptop) => sale.flash_sale === true);

  return (
    <div>
      <Banner />
      <FlashSale flashSale={flashSale} />
      <TopCategories />
      <MostPopularProducts />
    </div>
  );
};

export default HomePage;
