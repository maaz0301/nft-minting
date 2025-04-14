
"use client";

import { useState } from "react";
import { Modal} from "antd";
import { CloseOutlined } from "@ant-design/icons";
import Image from "next/image";
import Input from "@/components/shared/input";
import ButtonGroup from "antd/es/button/button-group";
import Button from "@/components/shared/button";

const UpdateProfileModal = ({ visible, onClose }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");

  const handleCancel = () => {
    setFullName("");
    setEmail("");
    onClose();
  };

  const handleUpdate = () => {
    alert("Profile updated successfully!");
    onClose();
  };

  return (
    <Modal
      open={visible}
      onCancel={handleCancel}
      closeIcon={
        <Image
          src="/assets/icons/onclose.svg"
          alt="close"
          className="w-5 h-5 cursor-pointer hover:opacity-80"
          height={20}
          width={20}
        />
        
      }
      footer={null}
      centered
      // closeIcon={<CloseOutlined style={{ color: "red" }} />}
      style={{
        width: "fit-content", // outer modal width
      }}
      styles={{
        // padding: 24,
        background: "rgba(0, 0, 0, 0.6)",
        backdropFilter: "blur(80px)",
        borderRadius: 22,
        boxShadow: "0 10px 25px rgba(0,0,0,0.5)",
        color: "white",
        width: "auto",
        maxWidth: "90vw",
        height: "auto",
        maxHeight: "90vh",
      }}
    >
      <h2 className="text-2xl font-semibold mb-6 text-white">Update Profile</h2>

      <div className="mb-4">
        <label htmlFor="fullName" className="text-sm font-medium text-white">
          Full Name
        </label>
        <Input
          id="fullName"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="Type here..."
            className="w-full bg-black/20 text-white py-2 border border-[#FFFFFF1A] rounded-[14px] focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        
      </div>

      <div className="mb-6">
        <label htmlFor="email" className="text-sm font-medium text-white">
          Email Address
        </label>
        <Input
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Type here..."
           className="w-full bg-black/20 text-white py-2 border border-[#FFFFFF1A] rounded-[14px] focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

     
       
          <div className="flex justify-end items-center gap-3">
          <Button
             onClick={handleCancel}
            className="text-white w-[100%] py-2 border-1 border-red-500 rounded-[8px]"
            text={"Cancel"}
          />

          <Button
            onClick={handleUpdate}
            className="text-white w-[100%] py-2 bg-[#4184D6] rounded-[8px]"
            text={"Update Information"}
          />
        
        </div>
      
    </Modal>
  );
};

export default UpdateProfileModal;
