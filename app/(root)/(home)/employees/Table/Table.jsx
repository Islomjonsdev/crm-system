"use client";

import { useState } from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { MdModeEditOutline } from "react-icons/md";
import Image from "next/image";
import "./Table.scss";
import { instance } from "@/api";
import { toast } from "react-toastify";

const Table = ({ data, setData }) => {
  const [successMessage, setSuccessMessage] = useState("");
  const handleDelete = async (id) => {
    try {
      const deleteIndex = await instance.delete(`/work/${id}`);
      setData((prevData) => prevData.filter((item) => item?.id !== id));
      console.log(deleteIndex?.data);
      setSuccessMessage(`${id} Successfully deleted`);
      setTimeout(() => {
        setSuccessMessage("");
      }, 2000);
      toast.success(`${id} Successfully deleted`);
    } catch (err) {
      console.log(err);
      setSuccessMessage(err.massege);
      toast.error("Failed to delete")
    }
  };
  return (
    <>
      {successMessage && <p>{successMessage}</p>}
      <div>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Image</th>
              <th>Title</th>
              <th>Description</th>
              <th>Price</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item, id) => (
              <tr key={id}>
                <td>{item?.id}</td>
                <td>
                  <Image
                    className="rounded-[50%]"
                    src={item?.image}
                    alt="table image"
                    width={40}
                    height={40}
                  />
                </td>
                <td>{item?.title}</td>
                <td>{item?.description}</td>
                <td>{item?.price}</td>
                <td>
                  <button className="bg-[green] p-[10px] rounded-[50%] text-[#fff]">
                    <MdModeEditOutline />
                  </button>
                </td>
                <td>
                  <button
                    className="bg-[red] p-[10px] rounded-[50%] text-[#fff]"
                    onClick={() => handleDelete(item?.id)}
                  >
                    <RiDeleteBin6Fill />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
