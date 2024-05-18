import { TLaptop } from "@/types";
import Image from "next/image";

const AllFlashSaleCard = ({ item }: { item: TLaptop }) => {
  const { image, price, name, configuration } = item;
  return (
    <div>
      <Image
        src={image}
        width={400}
        height={80}
        alt="image will be shown here"
      />
      <h1 className="text-green-500">{name}</h1>
      <p className="text-green-500">{configuration}</p>
      <p className="text-orange-500">${price}</p>
    </div>
  );
};

export default AllFlashSaleCard;
