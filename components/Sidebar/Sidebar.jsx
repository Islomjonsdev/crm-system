"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/svg/sidebar-logo.svg";
import dashboardIcon from "../../public/icons/dashboard.svg";
import projectsIcon from "../../public/icons/projects.svg";
import calendarIcon from "../../public/icons/calendar.svg";
import vocationsIcon from "../../public/icons/vocations.svg";
import employeesIcon from "../../public/icons/employees.svg";
import messengerIcon from "../../public/icons/messenger.svg";
import infoportalIcon from "../../public/icons/infoportal.svg";
import logOutIcon from "../../public/icons/logout.svg";
import Modal from "../Modal/Modal";

const Sidebar = () => {
  const [logoutModal, setLogoutModal] = useState(false);
  console.log(logoutModal);
  return (
    <>
      <div className="bg-[#fff] h-[100vh] max-w-[200px] w-[100%] rounded-[24px] pl-[24px] pr-[16px] fixed top-[20px]">
        <div className="mt-[40px] mb-[42px]">
          <Link href={"/"}>
            <Image src={logo} width={50} height={50} alt="logo" />
          </Link>
        </div>
        <ul>
          <li className="mb-[30px]">
            <Link
              href={"/dashboard"}
              className="flex items-center gap-[16px] text-[#7D8592] text-[16px] leading-[21.82px] font-semibold"
            >
              <Image src={dashboardIcon} width={24} height={24} alt={"icon"} />
              Dashboard
            </Link>
          </li>
          <li className="mb-[30px]">
            <Link
              href={"/projects"}
              className="flex items-center gap-[16px] text-[#7D8592] text-[16px] leading-[21.82px] font-semibold"
            >
              <Image src={projectsIcon} width={24} height={24} alt={"icon"} />
              Projects
            </Link>
          </li>
          <li className="mb-[30px]">
            <Link
              href={"/calendar"}
              className="flex items-center gap-[16px] text-[#7D8592] text-[16px] leading-[21.82px] font-semibold"
            >
              <Image src={calendarIcon} width={24} height={24} alt={"icon"} />
              Calendar
            </Link>
          </li>
          <li className="mb-[30px]">
            <Link
              href={"/vocations"}
              className="flex items-center gap-[16px] text-[#7D8592] text-[16px] leading-[21.82px] font-semibold"
            >
              <Image src={vocationsIcon} width={24} height={24} alt={"icon"} />
              Vacations
            </Link>
          </li>
          <li className="mb-[30px]">
            <Link
              href={"/employees"}
              className="flex items-center gap-[16px] text-[#7D8592] text-[16px] leading-[21.82px] font-semibold"
            >
              <Image src={employeesIcon} width={24} height={24} alt={"icon"} />
              Employees
            </Link>
          </li>
          <li className="mb-[30px]">
            <Link
              href={"/messenger"}
              className="flex items-center gap-[16px] text-[#7D8592] text-[16px] leading-[21.82px] font-semibold"
            >
              <Image src={messengerIcon} width={24} height={24} alt={"icon"} />
              Messenger
            </Link>
          </li>
          <li className="mb-[30px]">
            <Link
              href={"/infoportal"}
              className="flex items-center gap-[16px] text-[#7D8592] text-[16px] leading-[21.82px] font-semibold"
            >
              <Image src={infoportalIcon} width={24} height={24} alt={"icon"} />
              Info Portal
            </Link>
          </li>
        </ul>

        <div className="absolute bottom-[118px] bg-[#3F8CFF] max-w-[168px] w-[100%] left-[16px]">
          Support
        </div>

        <div className="absolute bottom-[45px]">
          <button
            className="flex items-center gap-[16px] text-[#7D8592] text-[16px] font-semibold leading-[21.82px]"
            onClick={() => setLogoutModal(true)}
          >
            <Image src={logOutIcon} width={24} height={24} alt="logout" />
            Logout
          </button>
        </div>
      </div>
      {logoutModal && <Modal close={setLogoutModal}>Logout</Modal>}
    </>
  );
};

export default Sidebar;
