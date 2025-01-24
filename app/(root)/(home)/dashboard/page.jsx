import React from "react";
import { dashboardData } from "@/api/data";

const Dashboard = () => {
  return (
    <div>
      <div className="mb-[28px]">
        <p className="text-[#7D8592] font-medium text-[16px] leading-[21.82px] mb-[10px]">
          Welcome back, Evan!
        </p>
        <div className="flex items-center justify-between">
          <h3 className="text-[#0A1629] font-bold text-[36px] leading-[49.1px]">
            Dashboard
          </h3>
          <p>Calendar</p>
        </div>
      </div>

      <div className="flex gap-[30px]">
        <div className="w-full bg-[#fff] pt-[28px] px-[18px] pb-[16px] rounded-[24px]">
          <div className="">
            <h4>Workload</h4>
          </div>

          <ul>
            
          </ul>
        </div>

        <div className="max-w-[339px] w-[100%] bg-[#fff]  pt-[28px] pr-[20px] pb-[28px] pl-[20px] rounded-[24px]">
            Right
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
