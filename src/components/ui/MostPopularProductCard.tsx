import { TLaptop } from "@/types";
import Image from "next/image";

const MostPopularProductCard = ({ popular }: { popular: TLaptop }) => {
  const { name, image, configuration } = popular;
  return (
    <div>
      <Image src={image} width={500} height={500} alt="image" />
      <h1>{name}</h1>
      <p>{configuration}</p>
    </div>
  );
};

export default MostPopularProductCard;
