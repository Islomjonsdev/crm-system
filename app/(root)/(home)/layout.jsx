import Header from "@/components/Header/Header";
import Sidebar from "@/components/Sidebar/Sidebar";

export default function HomeLayout({ children }) {
  return (
    <div className="flex gap-[30px] pt-[20px] pr-[40px] pb-[32px] pl-[20px]">
      <Sidebar />
      <div className="w-full ms-[230px]">
        <Header />
        <div className="pt-[50px]">
        {children}
        </div>
      </div>
    </div>
  );
}
