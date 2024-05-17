import { TLaptop } from "@/types";
import FlashSaleCard from "../ui/FlashSaleCard";

const FlashSale = ({ flashSale }: { flashSale: TLaptop[] }) => {
  return (
    <div>
      <h1 className="text-4xl text-accent text-center my-4 border-y-2 border-emerald-400 w-[25%] py-2">
        Flash Sale
      </h1>

      <div className="md:grid grid-cols-4 gap-4 my-6">
        {flashSale.map((laptop) => (
          <FlashSaleCard key={laptop._id} laptop={laptop} />
        ))}
      </div>
    </div>
  );
};

export default FlashSale;
