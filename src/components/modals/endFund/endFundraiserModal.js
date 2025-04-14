// components/EndFundraiserModal.js

import React, { useState } from 'react';
import { Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import Image from 'next/image';
import Button from '@/components/shared/button';

const EndFundraiserModal = ({ visible, onCancel, onConfirm }) => {
  return (
    <Modal
      title={
        <div className='flex  flex-col justify-between items-center'>
          <Image src={'/assets/icons/QuestionMark.png'} width={120} height={120}/>
          Are you sure you want to End Fundraiser?
        </div>
      }
      className="create-fundraiser-modal"
      open={visible}
      onCancel={onCancel}
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
          text={"yes"}
        />
        
      </div>
      ]}
      Style={{ fontSize: '16px', textAlign: 'center' }}
      width={400}
    >
      <div>Are you sure you want to end this fundraiser?</div>
    </Modal>
  );
};

export default EndFundraiserModal;
