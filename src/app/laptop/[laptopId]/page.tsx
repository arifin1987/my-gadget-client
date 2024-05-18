import LaptopDetails from "@/components/ui/LaptopDetails";

export interface TLaptopId {
  params: {
    laptopId: string;
  };
}

const LaptopDetailPage = async ({ params }: TLaptopId) => {
  console.log(params);
  const res = await fetch(`http://localhost:5000/laptop/${params.laptopId}`);
  const laptop = await res.json();

  return (
    <div>
      <LaptopDetails laptop={laptop} />
    </div>
  );
};

export default LaptopDetailPage;
