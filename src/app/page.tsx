import FlashSale from "@/components/FlashSale/FlashSale";
import MostPopularProducts from "@/components/MostPopularProducts/MostPopularProducts";
import TopCategories from "@/components/TopCategories/TopCategories";
import Banner from "@/components/shared/Banner";
import { TLaptop } from "@/types";

const HomePage = async () => {
  const res = await fetch("http://localhost:5000/laptops/", {
    next: {
      revalidate: 30,
    },
  });
  const data = await res.json();
  const flashSale = data.filter((sale: TLaptop) => sale.flash_sale === true);
  const topCategory = data.filter(
    (category: TLaptop) => category.top_category === true
  );
  const popularProduct = data.filter(
    (popular: TLaptop) => popular.product_rating >= 4.3
  );

  return (
    <div>
      <Banner />
      <FlashSale flashSale={flashSale} />
      <TopCategories topCategory={topCategory} />
      <MostPopularProducts popularProduct={popularProduct} />
    </div>
  );
};

export default HomePage;
