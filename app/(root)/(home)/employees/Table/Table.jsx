"use client";

import { useState } from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { MdModeEditOutline } from "react-icons/md";
import Image from "next/image";
import "./Table.scss";
import { instance } from "@/api";
import { toast } from "react-toastify";
import Modal from "@/components/ui/Modal/Modal";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Table = ({ data, setData, params }) => {
  const [editModal, setEditModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [editUsers, seteditUsers] = useState({});
  console.log(editUsers);

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
      toast.error("Failed to delete");
    }
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    instance
      .put(`/work/${editModal}`, editUsers, {
        headers: { "Content-Type": "application/json" },
      })
      .then(() => {
        setData((prevEditData) =>
          prevEditData?.map((item) =>
            item?.id === editModal ? { ...item, ...editUsers } : item
          )
        );
        setEditModal(false);
        toast.success("Successfully updated");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Failed to update");
      });
  };

  const handlEditId = (item) => {
    setEditModal(item?.id);
    seteditUsers(item);
  };

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    seteditUsers((prevEditUser) => ({
      ...prevEditUser,
      [name]: value,
    }));
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
                    <MdModeEditOutline onClick={() => handlEditId(item)} />
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

      {editModal && (
        <Modal close={setEditModal}>
          <div className="bg-[#fff] rounded-[10px] p-[20px]">
            <h1 className="mb-5 text-center font-bold text-[30px]">
              Edit user
            </h1>
            <form className="flex flex-col" onSubmit={handleUpdate}>
              <div className="flex flex-col mb-3">
                <label htmlFor="">Upload file</label>
                <Input type="file" formInput />
              </div>
              <div className="flex flex-col mb-3">
                <label htmlFor="">Enter title</label>
                <Input
                  type="text"
                  formInput
                  name="title"
                  value={editUsers.title}
                  onChange={handleChangeInput}
                />
              </div>
              <div className="flex flex-col mb-3">
                <label htmlFor="">Enter description</label>
                <Input
                  type="text"
                  formInput
                  name="description"
                  value={editUsers.description}
                  onChange={handleChangeInput}
                />
              </div>

              <div className="flex flex-col mb-3">
                <label htmlFor="">Enter price</label>
                <Input
                  type="number"
                  formInput
                  name="price"
                  value={editUsers.price}
                  onChange={handleChangeInput}
                />
              </div>
              <Button>Edit user</Button>
            </form>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Table;
