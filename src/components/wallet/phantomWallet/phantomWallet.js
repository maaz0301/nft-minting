"use client";
import React from "react";
import Button from "@/components/shared/button";
import Input from "@/components/shared/input";

import { useRouter } from 'next/navigation';
const PhantomWalletPage = () => {
  const router = useRouter(); 
  return (
    <div className="min-h-screen flex justify-center items-center  ">
      <div className=" bg-[#062E38] rounded-[22px]  w-[876px] px-24 py-24 flex flex-col justify-center items-center ">
      <h1 className="text-3xl font-bold text-[#FFFFFF] mb-6">
  Phantom Wallet
</h1>

        <div className=" flex flex-col gap-4 mb-4">
        <label htmlFor="balance" className="text-sm font-medium text-white">
          Connected As
        </label>
          <Input
           
            type="text"
            labelClass={"text-white"}
          
            className="w-full sm:w-[540px] bg-black/20 text-white flex justify-center  border border-[#FFFFFF1A] rounded-[14px] focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
            <label htmlFor="balance" className="text-sm font-medium text-white">
          Balance
        </label>
          <Input
          //  id={balance}
            labelClass={"text-white text-sm font-[400] "}
            type="text"
            
            className="w-full sm:w-[540px] bg-black/20 text-white flex justify-center  border border-[#FFFFFF1A] rounded-[14px] focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <Button
          text={"Go To Home"}
          className="bg-[#4184D6] w-full cursor-pointer text-white rounded-[12px] font-semiboldlex  max-w-[540px]  gap-4 items-center px-4 py-4    transition duration-300"
          onClick={() => {
            router.push('/dashboard');
          }}
        />
      </div>
    </div>
  );
};

export default PhantomWalletPage;
