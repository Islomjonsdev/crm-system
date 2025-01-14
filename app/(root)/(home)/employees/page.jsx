"use client";

import { useState, useEffect } from "react";
import Button from "@/components/ui/button";
import Table from "./Table/Table";
import { instance } from "@/api";
import Modal from "@/components/ui/Modal/Modal";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "react-toastify";

const Employees = () => {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [addUser, setAddUser] = useState(false);

  const postUser = (e) => {
    e.preventDefault();

    const postData = {
      title: title,
      description: description,
      price: price,
    };

    instance
      .post("/work", postData, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        console.log(res?.data);
        setData(res?.data);
        setAddUser(false);
        toast.success("Successfully posted");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Failed to post");
      });
  };

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
    <>
      <div>
        <div className="flex items-center justify-between mb-[20px]">
          <h1>Employees</h1>
          <Button label={"Add user"} onClick={() => setAddUser(true)} />
        </div>
        <Table data={data} setData={setData} />
      </div>
      {addUser && (
        <Modal close={setAddUser}>
          <div className="bg-[#fff] rounded-[10px] p-[20px]">
            <h1 className="mb-5 text-center font-bold text-[30px]">
              Create user
            </h1>
            <form className="flex flex-col" onSubmit={postUser}>
              <div className="flex flex-col mb-3">
                <label htmlFor="">Upload file</label>
                <Input type="file" formInput />
              </div>
              <div className="flex flex-col mb-3">
                <label htmlFor="">Enter title</label>
                <Input
                  type="text"
                  formInput
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="flex flex-col mb-3">
                <label htmlFor="">Enter description</label>
                <Input
                  type="text"
                  formInput
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>

              <div className="flex flex-col mb-3">
                <label htmlFor="">Enter price</label>
                <Input
                  type="number"
                  formInput
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>

              <Button type="submit" label={"Create user"} fullWidth />
            </form>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Employees;
