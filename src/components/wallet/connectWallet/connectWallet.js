'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Use Next.js router for navigation
import Button from '@/components/shared/button'; // Assuming Button component is available
import Spinner from './spinner'; // Custom spinner component

const ConnectWallet = () => {
  const [isLoading, setIsLoading] = useState(false); // Track loading state
  const router = useRouter(); // Next.js router for navigation

  const handleConnectWallet = async () => {
    setIsLoading(true); // Show spinner while waiting for connection

    // Check if Phantom Wallet is available in the window
    if (window.solana && window.solana.isPhantom) {
      try {
        // Request wallet connection
        const response = await window.solana.connect();

        // After successful connection, hide loading spinner
        setIsLoading(false);

        // Optionally, you can store the public key or wallet information
        console.log('Connected to Phantom wallet:', response.publicKey.toString());

        // Navigate to a page to handle the Phantom wallet's connected state
        router.push('/phantomWallet');
      } catch (err) {
        // Handle error if user rejects or something goes wrong
        setIsLoading(false);
        console.error('Failed to connect Phantom Wallet:', err);
        alert('Failed to connect Phantom Wallet. Please try again.');
      }
    } else {
      setIsLoading(false);
      alert('Please install the Phantom wallet extension.');
    }
  };

  // Handler to open the Phantom Wallet extension
  const handleOpenPhantom = () => {
    if (window.solana && window.solana.isPhantom) {
      // Open the Phantom Wallet extension window
      window.solana.connect()
        .then((response) => {
          // If successfully connected, log public key and route to the next page
          console.log('Connected to Phantom wallet:', response.publicKey.toString());
          router.push('/phantomWallet');
        })
        .catch((err) => {
          console.error('Failed to connect Phantom Wallet:', err);
          alert('Failed to connect Phantom Wallet. Please try again.');
        });
    } else {
      alert('Please install the Phantom wallet extension.');
    }
  };
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="bg-[#062E38] w-[90%] sm:w-[80%] md:w-[70%] lg:w-[50%] xl:w-[40%] px-6 sm:px-12 py-12 flex flex-col justify-center items-center cursor-pointer rounded-[22px]">
        <h1 className="text-3xl font-bold text-[#FFFFFF] mb-6 text-center sm:text-left">
          Choose A Wallet To Connect
        </h1>
        <p className="text-[#A0A0A0] text-center mb-6">
          Connect your wallet to mint exclusive NFTs and join raffles!
        </p>

        <div className="flex flex-col gap-6 mb-6 w-full">
          {/* Wallet Button 1 */}
          <Button
            text={'Phantom Wallet'}
            img={'/assets/icons/wallet.svg'}
            imgHeight={30}
            imgWidth={30}
            className={'flex w-full gap-4 items-center bg-[#fff] px-6 py-4 rounded-[12px] border border-[#4184D6] transition-all'}
            onClick={handleOpenPhantom} // Open Phantom wallet on click
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
        </div>

        <div className="glowing-background fixed top-0 left-0 w-full h-full pointer-events-none z-0"></div>

        {/* Connect Wallet Button */}
        <Button
          text={'Connect Your Wallet'}
          className="bg-[#4184D6] w-full text-white rounded-[12px] font-semibold gap-4 items-center px-4 py-4 transition duration-300 hover:bg-[#3572c1]"
          onClick={handleConnectWallet} // Show spinner and navigate after a delay
        />

        <p className="text-[#FFFFFF] mt-2 text-xs text-center">
          By connecting, you agree to our Terms and Privacy Policy.
        </p>
      </div>

      {/* Show spinner if loading */}
      {isLoading && <Spinner />}
    </div>
  );
};

export default ConnectWallet;
