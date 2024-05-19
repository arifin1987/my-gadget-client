import { ReactNode } from "react";
import Sidebar from "./Sidebar";

type dashboardProps = {
  children: ReactNode;
};

const DashboardLayout = ({ children }: dashboardProps) => {
  return (
    <div className="flex">
      <Sidebar />
      {children}
    </div>
  );
};

export default DashboardLayout;
