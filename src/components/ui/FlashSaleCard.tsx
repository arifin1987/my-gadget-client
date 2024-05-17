import { TLaptop } from "@/types";
import Image from "next/image";

const FlashSaleCard = ({ laptop }: { laptop: TLaptop }) => {
  const { image, price, name } = laptop;
  return (
    <div>
      <Image
        src={image}
        width={400}
        height={50}
        alt="image will be shown here"
      />
      <h1 className="text-green-500">{name}</h1>
      <p>${price}</p>
    </div>
  );
};

export default FlashSaleCard;
