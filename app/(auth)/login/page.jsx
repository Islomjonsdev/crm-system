"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import loginLogo from "../../../public/icons/loginLogo.svg";
import enterIcon from "../../../public/icons/enter.svg";
import IllustrationImage from "../../../public/svg/Illustration.svg";

const Login = () => {
  const [telNumber, setTelNumber] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      telNumber: telNumber,
      password: password
    }
    console.log(data);
  }
  return (
    <div className="flex">
      <div className="bg-[#3F8CFF] w-[100%] flex flex-col h-[100vh] flex flex-col items-center justify-center">
        <div className="max-w-[461px] w-[100%] mb-[50px]">
          <Link className="flex items-center gap-[30px] mb-[44px]" href={"/"}>
            <Image src={loginLogo} width={50} height={50} alt="loginLogo" />
            <h4 className="text-[#FFFFFF] font-bold text-[30px] leading-[40.92px]">
              InFast IT-Company
            </h4>
          </Link>
          <h1 className="text-[#FFFFFF] font-bold text-[40px] leading-[56px]">
            InFast IT-Company CRM-tizimi
          </h1>
        </div>
        <Image
          src={IllustrationImage}
          width={500}
          height={373}
          alt="IllustrationImage"
        />
      </div>

      <div className="w-[100%] flex flex-col h-[100vh] items-center justify-center bg-[#FFFFFF]">
        <h2>Kirish</h2>
        <form className="max-w-[403px] w-[100%]" onSubmit={onSubmit}>
          <div className="flex flex-col mb-[29px]">
            <label
              className="text-[#7D8592] font-bold text-[14px] leading-[24px] mb-[6px]"
              htmlFor=""
            >
              Telefon raqam
            </label>
            <input
              className="border border-[#D8E0F0] rounded-[14px] pt-[11px] pb-[13px] pl-[18px]"
              type="tel"
              onChange={(e) => setTelNumber(e.target.value)}
            />
          </div>
          <div className="flex flex-col mb-[35px]">
            <label
              className="text-[#7D8592] font-bold text-[14px] leading-[24px] mb-[6px]"
              htmlFor=""
            >
              Parol
            </label>
            <input
              className="border border-[#D8E0F0] rounded-[14px] pt-[11px] pr-[18px] pb-[13px] pl-[18px]"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-[14px]">
            <input type="checkbox" />
            <label htmlFor="">Meni eslab qoling</label>
          </div>

          <button className="bg-[#3F8CFF] flex items-center">
            Kirish
            <Image src={enterIcon} width={24} height={24} alt="enterIcon" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
