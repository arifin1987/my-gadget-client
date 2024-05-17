import { TLaptop } from "@/types";
import MostPopularProductCard from "../ui/MostPopularProductCard";

const MostPopularProducts = ({
  popularProduct,
}: {
  popularProduct: TLaptop[];
}) => {
  return (
    <div>
      <h1 className="text-4xl text-accent text-center my-4 border-y-2 border-emerald-400 w-[25%]  py-2">
        Most Popular Products
      </h1>
      <p className="w-2/4 ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore soluta
      </p>
      <div>
        {popularProduct.map((popular) => (
          <MostPopularProductCard key={popular._id} popular={popular} />
        ))}
      </div>
    </div>
  );
};

export default MostPopularProducts;
