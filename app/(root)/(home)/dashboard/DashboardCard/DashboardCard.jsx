import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import React from "react";

const DashboardCard = ({
  dashboadIcon,
  dashboardName,
  dashboardPosition,
  dashboardDegree,
}) => {
  return (
    <Card className="max-w-[175px] w-full flex flex-col items-center bg-[#F4F9FD] rounded-[24px] pt-[26px] pb-[9px] gap[16px] border border-[#F4F9FD]">
      <Image
        className="mb-4"
        src={dashboadIcon}
        alt="dashboadIcon"
        width={50}
        height={50}
      />
      <CardTitle className="font-bold text-[16px] leading-[21.82px] mb-[1px]">
        {dashboardName}
      </CardTitle>
      <CardDescription className="font-normal text-[14px] leading-[21px] text-[#0A1629] mb-[9px]">
        {dashboardPosition}
      </CardDescription>
      <span className="border border-[#7D8592] px-[4.5px] py-[3px] text-[#7D8592] font-semibold text-[12px] leading-[12px] rounded-[4px]">
        {dashboardDegree}
      </span>
    </Card>
  );
};

export default DashboardCard;
