import AllFlashSaleCard from "@/components/ui/AllFlashSaleCard";
import { TLaptop } from "@/types";

const FlashSalePage = async () => {
  const res = await fetch("http://localhost:5000/laptop/");
  const data = await res.json();
  const flashSale = data.filter((sale: TLaptop) => sale.flash_sale === true);

  return (
    <div>
      <div className=" my-4">
        <h1 className="text-4xl text-accent text-center my-4 border-y-2 border-emerald-400 w-[25%]  py-2  ">
          Flash Sale
        </h1>
        <p className="w-2/4 ">
          On the other hand, students or casual users might find joy in a more
          affordable
        </p>
      </div>
      <div className="md:grid grid-cols-4 gap-4">
        {flashSale.map((item: TLaptop) => (
          <AllFlashSaleCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default FlashSalePage;
