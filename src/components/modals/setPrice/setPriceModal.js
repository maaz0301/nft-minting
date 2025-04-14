import React, { useState } from 'react';
import { Modal } from 'antd';
import Button from '@/components/shared/button';
import Input from '@/components/shared/input';

const SetPriceModal = ({ visible, onCancel, onSave }) => {
  const [price, setPrice] = useState('');

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleSave = () => {
    // Logic to save the price can go here
    onSave(price); // Pass the price value to the parent component
  };

  return (
    <Modal
      title="Set Price"
      visible={visible}
      onCancel={onCancel}
        className="create-fundraiser-modal"
      footer={[
        <div className="flex justify-end items-center gap-3">
          <Button
            onClick={() => {
              form.resetFields();
              onCancel();
            }}
            className="text-white w-[100%] py-2 border-1 border-red-500 rounded-[8px]"
            text={"Cancel"}
          />

          <Button
            onClick={() => {
              form.resetFields();
              onCancel();
            }}
            className="text-white w-[100%] py-2 bg-[#4184D6] rounded-[8px]"
            text={"Create Fundraiser"}
          />
          
        </div>
      ]}
      bodyStyle={{ fontSize: '16px', padding: '20px' }}
      width={400}
    >
      <div>
    
        <label className='text-white text-sm font-[inter] font-normal'> Set Price In USDC</label>
        <Input
         value={price}
         onChange={handlePriceChange}
         placeholder="Enter price"
         type="text"
           className="w-full  sm:max-w-[540px] bg-black/20  text-white flex justify-center  border border-[#FFFFFF1A] rounded-[13px] focus:outline-none focus:ring-2 focus:ring-blue-500"
        
        />
      </div>
    </Modal>
  );
};

export default SetPriceModal;
