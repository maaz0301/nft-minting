"use client";
import { useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import UpdateProfileModal from "@/components/modals/updateProfile/updateProfile";
import Input from "@/components/shared/input";
import Button from "@/components/shared/button";

const ProfileCard = () => {
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState("0x7f...3d4a");
  const [emailValue, setEmailValue] = useState("0x7f...3d4a");

  const handleEditClick = () => {
    setEditing((prev) => !prev);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmailValue(e.target.value);
  };

  const [modalVisible, setModalVisible] = useState(false);

  const showModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  return (
    <div className="flex flex-col items-center bg-[#025CB91A]/10 backdrop-blur-[80px] p-6 rounded-lg shadow-xl w-full">
      {/* Heading with back icon */}
      <div className="flex items-center gap-2 mb-6 w-full">
         <Image src={'/assets/icons/backArrow.svg'} width={13} height={16}/>
               <h2 className="text-xl font-semibold text-white">Profile</h2>
      </div>

      {/* Profile Section */}
      <div className="flex justify-between items-center w-full mb-4">
        {/* Profile Image */}
        <div className="relative w-24 h-24">
          <img
            src="/assets/icons/alice.svg"
            alt="Profile"
            className="w-full h-full rounded-full object-cover"
          />

          {/* Edit Icon Button */}
          <button
            className="absolute bottom-0 right-0 bg-white text-black p-1 rounded-full"
            aria-label="Edit profile picture"
          >
            <Image src="/assets/icons/pencil.svg" width={10} height={10} alt="Edit" />
          </button>
        </div>

        {/* Edit Button */}
        <div>
          <Button
            text={"Edit"}
            className="flex justify-center items-center gap-2 bg-[#4184D6] text-white py-2 rounded-[8px] w-[183px] text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
            aria-label="Edit"
            onClick={showModal}
            img={"/assets/icons/editbtn.svg"}
            imgHeight={5}
            imgWidth={5}
          />
        </div>
      </div>

      {/* Full Name & Email Inputs */}
      <div className="flex flex-col sm:flex-row w-full gap-3">
        <div className="w-full mb-4">
          <label htmlFor="fullName" className="block text-sm text-white mb-2 font-[inter]">
            Full Name
          </label>
          <Input
            id="fullName"
            type="text"
            value={name}
            disabled={!editing}
            onChange={handleNameChange}
            className="w-full bg-black/20 font-[inter] text-white py-2 border border-[#FFFFFF1A] rounded-[14px] focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="w-full mb-4">
          <label htmlFor="email" className="block text-sm text-white mb-2 font-[inter]">
            Email Address
          </label>
          <Input
            id="email"
            type="email"
            value={emailValue}
            disabled={!editing}
            onChange={handleEmailChange}
            className="w-full bg-black/20 font-[inter] text-white py-2 border border-[#FFFFFF1A] rounded-[14px] focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Update Modal */}
      <UpdateProfileModal visible={modalVisible} onClose={closeModal} />
    </div>
  );
};

export default ProfileCard;
