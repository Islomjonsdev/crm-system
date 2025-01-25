import {
  Card,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import React from "react";

const DashboardCard = ({
  dashboadIcon,
  dashboardName,
  dashboardPosition,
  dashboardDegree,
}) => {
  return (
    <Card className="max-w-[175px] w-full flex flex-col items-center bg-[#F4F9FD] rounded-[24px] pt-[26px] pb-[9px] gap[16px]">
      <Image className="mb-4" src={dashboadIcon} alt="dashboadIcon" width={50} height={50} />
      <CardTitle className="font-bold text-[16px] leading-[21.82px] ">{dashboardName}</CardTitle>
      <CardDescription>{dashboardPosition}</CardDescription>
      <span>{dashboardDegree}</span>
    </Card>
  );
};

export default DashboardCard;
