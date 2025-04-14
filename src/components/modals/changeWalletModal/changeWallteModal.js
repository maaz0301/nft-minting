"use client";

import { Modal } from "antd";
import Image from "next/image";
import { useState } from "react";
import clsx from "clsx";
import Button from "@/components/shared/button";
import UpdateWalletModal from "../updatewallet/updatewalletModal";

const wallets = [
  { name: "Phantom Wallet", icon: "/assets/icons/wallet-icon.svg" },
  { name: "Solflare Wallet", icon: "/assets/icons/wallet-icon.svg" },
  { name: "Glow Wallet", icon: "/assets/icons/wallet-icon.svg" },
];

const ChangeWalletModal = ({ open, onCancel, onSubmit }) => {
  const [selected, setSelected] = useState('');
  
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const handleOpen = () => setIsModalOpen(true);
    const handleClose = () => setIsModalOpen(false);
  
    const handleSubmit = (selectedWallet) => {
      console.log("Selected wallet:", selectedWallet);
      // Do your logic here — save to state or call an API
      handleClose();
    };

  const handleUpdate = () => {
    if (selected) {
      onSubmit(selected);
    }
  };


  return (
    <Modal
      open={open}
      onCancel={onCancel}
      footer={null}
      centered
      closable
      closeIcon={
        <Image
          src="/assets/icons/onclose.svg"
          alt="close"
          className="w-6 h-6 cursor-pointer"
          width={24}
          height={24}
        />
      }
    className="change-password-modal"
      title={<span className="text-white text-xl font-bold">Change Wallet</span>}
    >
      <div className="pt-2 pb-4">
        <h2 className="text-white text-lg font-semibold mb-1">
          Choose A Wallet To Connect
        </h2>
        <p className="text-[#B9BDC1] text-sm mb-4">
          Connect Your Wallet To Mint Exclusive NFTs And Join Fundraiser!
        </p>

        <div className="flex flex-col gap-3">
          {/* {wallets.map((wallet) => (
            <button
              key={wallet.name}
              onClick={() => setSelected(wallet.name)}
              className={clsx(
                "flex items-center gap-3 px-4 py-3 rounded-xl bg-white text-black text-base font-medium border transition-all",
                selected === wallet.name ? "border-blue-500 shadow-md" : "border-transparent"
              )}
            >
              <Image
                src={wallet.icon}
                alt="wallet icon"
                width={24}
                height={24}
              />
              {wallet.name}
            </button>
          ))}
        </div>

        <div className="flex justify-between items-center mt-8 gap-4">
          <button
            onClick={onCancel}
            className="w-full py-2 text-white border border-red-500 rounded-[10px] bg-[#2D2D2D] hover:bg-red-600 hover:border-red-600 transition-all"
          >
            Cancel
          </button>
          <button
            onClick={handleUpdate}
            disabled={!selected}
            className={clsx(
              "w-full py-2 text-white rounded-[10px] transition-all",
              selected
                ? "bg-[#4184D6] hover:bg-blue-600"
                : "bg-[#4184D6]/50 cursor-not-allowed"
            )}
          >
            Update Wallet
          </button> */}
          <Button
            text={'Phantom Wallet'}
            img={'/assets/icons/wallet.svg'}
            imgHeight={30}
            imgWidth={30}
            className={'flex w-full gap-4 items-center bg-[#fff] px-6 py-4 rounded-[12px] border border-[#4184D6] transition-all'}
          />

          {/* Wallet Button 2 */}
          <Button
            text={'Solflare Wallet'}
            img={'/assets/icons/wallet.svg'}
            imgHeight={30}
            imgWidth={30}
            className={'flex w-full gap-4 items-center bg-[#fff] px-6 py-4 rounded-[12px] border border-[#4184D6] transition-all'}
          />

          {/* Wallet Button 3 */}
          <Button
            text={'Glow Wallet'}
            img={'/assets/icons/wallet.svg'}
            imgHeight={30}
            imgWidth={30}
            className={'flex w-full gap-4 items-center bg-[#fff] px-6 py-4 rounded-[12px] border border-[#4184D6] transition-all'}
          />
        
        <div className="flex  justify-end items-center gap-3">
          <Button
            onClick={() => {
              form.resetFields();
              onCancel();
            }}
            className={
              " text-white w-[100%] py-2  border-1  border-red-500 rounded-[8px]"
            }
            text={"Cancel "}
          />

          <Button
            onClick={handleOpen}
            className={" text-white w-[100%] py-2  bg-[#4184D6] rounded-[8px]"}
            text={"Change Password"}
          />

        </div>
        </div> <UpdateWalletModal
        open={isModalOpen}
        onCancel={handleClose}
        onSubmit={handleSubmit}
      />
      
      
      </div>
    </Modal>
  );
};

export default ChangeWalletModal;
