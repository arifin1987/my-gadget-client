import { TLaptop } from "@/types";
import Image from "next/image";

const LenovoLaptopCard = ({ item }: { item: TLaptop }) => {
  const { name, image, brand, configuration, price, product_rating, _id } =
    item;
  return (
    <div>
      <Image src={image} width={400} height={80} alt="image" />
      <h1 className="text-xl font-bold text-blue-500">{brand}</h1>
      <h1 className="text-green-500">{name}</h1>
      <p>{configuration}</p>
      <p className="text-orange-500">${price}</p>
    </div>
  );
};

export default LenovoLaptopCard;
