"use client";

import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useState } from "react";
import Calendar from "../calendar/page";
import EmployeesVacations from "./EmployeesVacations/EmployeesVacations";
import "./vocations.scss"

const Vocations = () => {
  const [tab, setTab] = useState("Employees’ vacations");
  return (
    <div>
      <div className="flex items-center justify-between">
        <h3>Vacations</h3>
        <div className="flex items-center bg-[#E6EDF5] max-w-[400px] w-full rounded-[24px] py-[4px] px-[5px]">
          <button
            className={`w-full py-[9px] ${tab === "Employees’ vacations" ? "active" : ""}`}
            onClick={() => setTab("Employees’ vacations")}
          >
            Employees’ vacations
          </button>
          <button
            className={`w-full w-full py-[9px] ${tab === "Calendar" ? "active" : ""}`}
            onClick={() => setTab("Calendar")}
          >
            Calendar
          </button>
        </div>
        <Button variant="adduserbtn">
          <Plus />
          Add Request
        </Button>
      </div>

      <div>
        {tab === "Employees’ vacations" && <EmployeesVacations />}
        {tab === "Calendar" && <Calendar />}
      </div>
    </div>
  );
};

export default Vocations;
