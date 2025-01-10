"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import searchIcon from "../../public/icons/search.svg";
import notificationsIcon from "../../public/icons/notifications.svg";
import profileImage from "../../public/images/profileImage.png";
import rightIcon from "../../public/icons/right.svg";
import { IoIosArrowUp } from "react-icons/io";
import { Input } from "../ui/input";

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick((prev) => !prev);
  };
  return (
    <header className="flex items-center justify-between">
      <div className="max-w-[412px] w-[100%] relative">
        <Input type="search" placeholder="Search" />
        <Image
          className="absolute top-[12px] left-[19px]"
          src={searchIcon}
          alt="searchIcon"
          width={24}
          height={24}
        />
      </div>

      <div className="flex items-center gap-[24px]">
        <Link
          href={"/"}
          className="bg-[#fff] w-[48px] h-[48px] flex items-center justify-center rounded-[14px]"
        >
          <Image
            src={notificationsIcon}
            alt="notificationsIcon"
            width={24}
            height={24}
          />
        </Link>

        <div
          className="bg-[#FFFFFF] flex items-center gap-[10px] cursor-pointer pt-[9px] pr-[11px] pb-[9px] pl-[14px] rounded-[14px]"
          onClick={handleClick}
        >
          <Image src={profileImage} alt="profileImage" width={30} height={30} />
          <p className="text-[#0A1629] font-bold text-[16px] leading-[24px]">
            Evan Yates
          </p>
          {click === false ? (
            <Image src={rightIcon} alt="rightIcon" width={24} height={24} />
          ) : (
            <IoIosArrowUp />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
