import Link from "next/link";
import { FaUserShield } from "react-icons/fa";

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
    <aside className="mr-10 bg-slate-500 p-8 my-4">
      <h1 className="text-xl text-white font-semibold flex gap-2">
        <FaUserShield />
        Dashboard
      </h1>
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
