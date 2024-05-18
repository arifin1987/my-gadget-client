import { TLaptop } from "@/types";
import Image from "next/image";

const LaptopCard = ({ laptop }: { laptop: TLaptop }) => {
  const { name, image, brand, configuration, price, product_rating } = laptop;
  return (
    <div>
      <Image src={image} width={400} height={80} alt="image" />
      <h1 className="text-red-500">{brand}</h1>
      <h1 className="text-green-500">{name}</h1>
      <p className="text-green-500">{configuration}</p>
      <p>Product Rating : {product_rating}</p>
      <p className="text-orange-500">${price}</p>
    </div>
  );
};

export default LaptopCard;
