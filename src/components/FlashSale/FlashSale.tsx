import { TLaptop } from "@/types";
import FlashSaleCard from "../ui/FlashSaleCard";
import Link from "next/link";

const FlashSale = ({ data }: { data: TLaptop[] }) => {
  const flashSale = data.filter((sale: TLaptop) => sale.flash_sale === true);
  return (
    <div>
      <div className="md:flex justify-between items-center">
        <h1 className="text-4xl text-accent text-center my-4 border-y-2 border-emerald-400 w-[25%] py-2">
          Flash Sale
        </h1>
        <Link href="/flash-sale">
          <button className="btn btn-outline btn-accent">View All</button>
        </Link>
      </div>

      <div className="md:grid grid-cols-4 gap-4 my-6">
        {flashSale.slice(0, 4).map((laptop) => (
          <FlashSaleCard key={laptop._id} laptop={laptop} />
        ))}
      </div>
    </div>
  );
};

export default FlashSale;
