
'use client'

import Button from '@/components/shared/button';
import React from 'react';
import { useRouter } from 'next/navigation';
const MintingPage = () => {
  const router = useRouter(); 
  return (
    
    <div className="min-h-screen flex justify-center items-center ">
  <div className="bg-[#025CB91A]/10 backdrop-blur-[445.9px] border border-[#19E3D4]/16 rounded-[22px] shadow-xl px-6 sm:px-12 py-12 flex flex-col justify-center items-center">
    
    <div className="flex flex-col items-center space-y-12">
     <div>
     <h1 className="text-3xl sm:text-4xl font-bold text-[#FFFFFF] font-[inter] text-center sm:text-left">
        Welcome to Dapp NFT Minting
      </h1>

      <p className="text-[#A0A0A0] font-[inter] text-xl text-center font-normal">
        Connect your wallet to mint exclusive NFTs and join raffles!
      </p>
     </div>

      <Button
        className="bg-[#4184D6] px-8 py-3 cursor-pointer text-white rounded-[12px] font-semibold hover:bg-[#3572c1] transition duration-300 w-full"
        onClick={() => {
          router.push('/connectWallet');
        }}
        text={'Connect Your Wallet'}
      />
    </div>

  </div>
</div>

  );
};

export default MintingPage;
