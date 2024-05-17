import { TLaptop } from "@/types";
import Image from "next/image";

const TopCategoriesCard = ({ category }: { category: TLaptop }) => {
  const { name, image } = category;
  return (
    <div>
      <Image src={image} width={500} height={500} alt="image" />
      <h1>{name}</h1>
    </div>
  );
};

export default TopCategoriesCard;
