'use client';

import React from "react";
import Button from "@/components/shared/button";
import Input from "@/components/shared/input";
import { useRouter } from 'next/navigation';

const PhantomWalletPage = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen flex justify-center items-center px-4 sm:px-6">
      <div className="bg-[#025CB91A]/10 backdrop-blur-[445.9px] border border-[#19E3D4]/16 rounded-[22px] shadow-xl w-full max-w-3xl px-6 sm:px-12 lg:px-24 py-10 sm:py-16 flex flex-col justify-center items-center">
        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-6 text-center">
          Phantom Wallet
        </h1>

        <div className="flex flex-col gap-4 mb-6 w-full max-w-[540px]">
          <label htmlFor="connectedAs" className="text-sm font-medium text-white">
            Connected As
          </label>
          <Input
            type="text"
            id="connectedAs"
            labelClass="text-white"
            className="w-full bg-black/20 text-white border border-[#FFFFFF1A] rounded-[14px] focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <label htmlFor="balance" className="text-sm font-medium text-white">
            Balance
          </label>
          <Input
            type="text"
            id="balance"
            labelClass="text-white"
            className="w-full bg-black/20 text-white border border-[#FFFFFF1A] rounded-[14px] focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <Button
          text="Go To Home"
          className="bg-[#4184D6] w-full text-white rounded-[12px] font-semibold px-4 py-3 transition duration-300 hover:bg-[#3572c1] max-w-[540px]"
          onClick={() => router.push('/dashboard')}
        />
      </div>
    </div>
  );
};

export default PhantomWalletPage;
