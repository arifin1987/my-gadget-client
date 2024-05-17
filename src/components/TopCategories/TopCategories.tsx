import { TLaptop } from "@/types";
import TopCategoriesCard from "../ui/TopCategoriesCard";

const TopCategories = ({ topCategory }: { topCategory: TLaptop[] }) => {
  return (
    <div>
      <h1 className="text-4xl text-accent text-center my-4 border-y-2 border-emerald-400 w-[25%] mx-auto py-2">
        Top Categories
      </h1>
      <p className="w-2/4 mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore soluta
      </p>
      <div>
        {topCategory.map((category) => (
          <TopCategoriesCard category={category} key={category._id} />
        ))}
      </div>
    </div>
  );
};

export default TopCategories;
