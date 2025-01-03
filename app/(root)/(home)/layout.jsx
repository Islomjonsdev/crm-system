import Header from "@/components/Header/Header";
import Sidebar from "@/components/Sidebar/Sidebar";

export default function HomeLayout({ children }) {
  return (
    <div className="flex">
      <Sidebar />
      <div>
        <Header />
        {children}
      </div>
    </div>
  );
}
