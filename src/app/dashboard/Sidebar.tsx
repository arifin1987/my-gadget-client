import Link from "next/link";

const navlinks = [
  {
    path: "/dashboard",
    title: "Dashboard",
  },
  {
    path: "/dashboard/all-products",
    title: "All Products",
  },
  {
    path: "/",
    title: "Home",
  },
];

const Sidebar = () => {
  return (
    <aside className="mr-10 bg-slate-500 p-8 my-2">
      <h1 className="text-3xl text-white font-semibold">Dashboard</h1>
      <ul>
        {navlinks.map(({ path, title }) => (
          <li className="my-4 text-white" key={path}>
            <Link href={path}>{title}</Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
