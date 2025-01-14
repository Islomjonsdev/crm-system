"use client";

import { useState, useEffect } from "react";
import Button from "@/components/ui/button";
import Table from "./Table/Table";
import { instance } from "@/api";

const Employees = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      const res = await instance.get("/work");
      console.log(res?.data);
      setData(res?.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <div className="flex items-center justify-between mb-[20px]">
        <h1>Employees</h1>
        <Button label={"Add user"} />
      </div>
      <Table data={data} setData={setData} />
    </div>
  );
};

export default Employees;
