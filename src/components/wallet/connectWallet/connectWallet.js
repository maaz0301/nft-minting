'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import Button from '@/components/shared/button';
import Spinner from './spinner'; // Custom spinner component

const ConnectWallet = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleConnectWallet = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      router.push('/phantomWallet');
    }, 2000);
  };

  return (
    <div className="min-h-screen flex justify-center items-center px-4 sm:px-8">
      <div className="relative bg-[#025CB91A]/10 backdrop-blur-[445.9px] border border-[#19E3D4]/16 rounded-[22px] shadow-xl flex flex-col justify-center items-center w-full max-w-xl px-6 sm:px-12 py-10 sm:py-14">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#FFFFFF] mb-4 text-center">
          Choose A Wallet To Connect
        </h1>
        <p className="text-[#A0A0A0] text-sm sm:text-base text-center mb-6">
          Connect your wallet to mint exclusive NFTs and join raffles!
        </p>

        <div className="flex flex-col gap-4 sm:gap-6 mb-6 w-full">
          {/* Wallet Buttons */}
          {['Phantom Wallet', 'Solflare Wallet', 'Glow Wallet'].map((wallet, index) => (
            <Button
              key={index}
              text={wallet}
              img="/assets/icons/wallet.svg"
              imgHeight={30}
              imgWidth={30}
              className="flex w-full gap-4 items-center bg-white px-5 sm:px-6 py-3 sm:py-4 rounded-[12px] border border-[#4184D6] transition-all"
            />
          ))}
        </div>

        {/* Connect Button */}
        <Button
          text={'Connect Your Wallet'}
          className="bg-[#4184D6] w-full text-white rounded-[12px] font-semibold gap-4 items-center px-4 py-3 sm:py-4 transition duration-300 hover:bg-[#3572c1]"
          onClick={handleConnectWallet}
        />

        <p className="text-[#FFFFFF] mt-3 text-xs text-center">
          By connecting, you agree to our Terms and Privacy Policy.
        </p>

        {/* Optional glowing background (if needed visually) */}
        <div className="glowing-background absolute top-0 left-0 w-full h-full pointer-events-none z-0" />
      </div>

      {/* Show spinner if loading */}
      {isLoading && <Spinner />}
    </div>
  );
};

export default ConnectWallet;
