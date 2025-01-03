import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../public/svg/sidebar-logo.svg";

const Sidebar = () => {
  return (
    <div className="bg-[red]  h-[100vh] max-w-[200px] w-[100%] rounded-[24px] mt-[20px] ml-[20px]">
      <div className="mt-[50px] pl-[24px] mb-[42px]">
        <Link href={"/"}>
          <Image src={logo} width={50} height={50} alt="logo"/>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
