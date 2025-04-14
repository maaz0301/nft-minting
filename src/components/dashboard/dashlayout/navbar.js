
"use client";
import React, { useState } from "react";
import Image from "next/image";
import Bell from "../../../../public/assets/icons/noftication.svg"; // Adjust the path as necessary
import NotificationModal from "@/components/modals/notification/notificationModal";

import dynamic from 'next/dynamic';
import MenuModal from "@/components/modals/menu/menuModal"; // Make sure the import is correct
import ProfileDropDown from "@/components/modals/updateProfile/updateProfile";

// const MenuModal = dynamic(() => import('@/components/modals/menu/menuModal'), { ssr: false });
const DashNavbar = ({ userName = "Alice", profileImg }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [menuModalVisible, setMenuModalVisible] = useState(false);
  const isMobileOnly = true; // your condition
  // Show/Hide Menu Modal
  const showMenuModal = () => setMenuModalVisible(true);
  const hideMenuModal = () => setMenuModalVisible(false);
  const [showProfile, setShowProfile] = useState(false);

  // Show Notification Modal
  const showModal = () => {
    setIsModalVisible(true);
  };

  // Close Notification Modal
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav 
   className="sticky top-0 z-30 w-full flex flex-col sm:flex-row justify-between items-center sm:items-center gap-6 px-4 sm:px-6 py-4  bg-grad sm:bg-none  text-white  cursor-pointer " >
 
    {/* Left Section */}
      <div className="flex flex-col justify-center items-center sm:items-start text-center sm:text-left sm:w-1/3">
        <h1 className="text-lg sm:text-xl font-semibold">
          Welcome back, {userName}!
        </h1>
        {/* <p className="text-xs sm:text-sm text-[#6cdb7e]">
          Solana Address: <span className="text-white">0x7f...3d4a</span>
          <span className="text-green-400 ml-1">(connected wallet)</span>
        </p> */}
      </div>

      {/* Right Section */}
      <div className="flex flex-wrap sm:flex-row items-center gap-6 sm:w-2/3 sm:justify-end">
        {/* Search */}
        <div className="relative w-[250px] sm:w-[300px] mb-4 sm:mb-0">
          <input
            type="text"
            placeholder="Search..."
            className="w-full py-3 pl-10 pr-4 rounded-[10px] bg-[#1B2B34] placeholder-gray-400 text-sm border border-[#123c43] focus:outline-none"
          />
          <svg
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="none"
            viewBox="0 0 30 30"
          >
            <path
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1 0 6.5 6.5a7.5 7.5 0 0 0 10.6 10.6Z"
            />
          </svg>
        </div>

        {/* Notification */}
        <button
          aria-label="Notifications"
          onClick={showModal}
          className="relative flex justify-center items-center bg-[#1B2B34] border border-gray-600 rounded-full p-2"
        >
          <Image src={Bell} alt="Notification Icon" width={24} height={24} />
        </button>

        {/* Profile */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <Image
              src={profileImg || "/assets/icons/alice.svg"}
              alt="User Profile"
              width={40}
              height={40}
              className="object-cover"
            />
          </div>
          <div className="flex flex-col text-sm">
            <span className="font-medium truncate">{userName}</span>
            <span className="text-gray-300 text-xs truncate">alice@gmail.com</span>
          </div>
        </div>

        {/* Three Dots Menu */}
        <button
          aria-label="Menu"
          onClick={showMenuModal}
          // onClick={()=><ProfileDropDown/>}
         
        >
          <Image
            src={"/assets/icons/dots.svg"}
            width={4}
            height={18}
            alt="menu dots"
          />
        </button>
      </div>

      {/* Modals */}
      <NotificationModal
        isVisible={isModalVisible}
        handleCancel={handleCancel}
      />

      <MenuModal
        visible={menuModalVisible} // Pass the correct `visible` prop
        onClose={hideMenuModal}     // Use `onClose` instead of `handleCancel`
      />
      {showProfile && (
        <div className="absolute right-0 top-full">
          <ProfileDropDown />
        </div>
      )}
    </nav>
  );
};

export default DashNavbar;
