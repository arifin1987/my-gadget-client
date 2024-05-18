import { TLaptop } from "@/types";
import Image from "next/image";

const MostPopularProductCard = ({ popular }: { popular: TLaptop }) => {
  const { name, image, configuration, price } = popular;
  return (
    <div>
      <Image src={image} width={400} height={80} alt="image" />
      <h1 className="text-green-500">{name}</h1>
      <p>{configuration}</p>
      <p className="text-orange-500">${price}</p>
    </div>
  );
};

export default MostPopularProductCard;
