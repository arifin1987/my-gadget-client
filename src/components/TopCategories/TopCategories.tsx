import { TLaptop } from "@/types";
import TopCategoriesCard from "../ui/TopCategoriesCard";

const TopCategories = ({ topCategory }: { topCategory: TLaptop[] }) => {
  return (
    <div>
      <h1 className="text-4xl text-accent text-center my-4 border-y-2 border-emerald-400 w-[25%] mx-auto py-2">
        Top Categories
      </h1>
      <p className="w-2/4 mx-auto text-center">
        Laptops have revolutionized the way we interact with technology,
        transforming from clunky briefcase replacements into sleek and powerful
      </p>
      <div className="md:grid grid-cols-3 gap-4 my-8">
        {topCategory.slice(0, 3).map((category) => (
          <TopCategoriesCard category={category} key={category._id} />
        ))}
      </div>
    </div>
  );
};

export default TopCategories;
