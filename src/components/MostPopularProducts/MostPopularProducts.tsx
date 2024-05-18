import { TLaptop } from "@/types";
import MostPopularProductCard from "../ui/MostPopularProductCard";

const MostPopularProducts = ({ data }: { data: TLaptop[] }) => {
  const popularProduct = data.filter(
    (popular: TLaptop) => popular.product_rating >= 4.3
  );
  return (
    <div>
      <h1 className="text-4xl text-accent text-center my-4 border-y-2 border-emerald-400 w-[25%]  py-2">
        Most Popular Products
      </h1>
      <p className="w-2/4 ">
        On the other hand, students or casual users might find joy in a more
        affordable option that excels at everyday tasks like web browsing,
        social media.
      </p>
      <div className="md:grid grid-cols-4 gap-4 my-8">
        {popularProduct.map((popular) => (
          <MostPopularProductCard key={popular._id} popular={popular} />
        ))}
      </div>
    </div>
  );
};

export default MostPopularProducts;
