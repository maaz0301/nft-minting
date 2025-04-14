"use client";

import Button from "@/components/shared/button";
import Input from "@/components/shared/input";
import { Modal, Form } from "antd";
import Image from "next/image";
import { useState } from "react";

const ChangePasswordModal = ({ open, onCancel, onSubmit }) => {
  const [form] = Form.useForm();

  const handleFinish = (values) => {
    onSubmit(values);
    form.resetFields();
  };

  return (
    <Modal
      title={
        <span className="text-white text-xl font-bold">Change Password</span>
      }
     
      open={open}
      onCancel={onCancel} // ← this should stay a function
      closeIcon={
        <Image
          src="/assets/icons/onclose.svg"
          alt="close"
          className="w-5 h-5 cursor-pointer hover:opacity-80"
          height={20}
          width={20}
        />
      }
      footer={null}
      centered
      closable
      className="change-password-modal"
    >
      <Form layout="vertical" form={form} onFinish={handleFinish}>
        <Form.Item
          label={<span className="text-white text-sm ">Current Password</span>}
          name="current"
          rules={[{ required: true, message: "Please enter current password" }]}
        >
          <Input
            type="password"
            placeholder="Type here..."
            name="current"
            icon
            className="w-full bg-black/20 text-white py-2 border border-[#FFFFFF1A] rounded-[14px] focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </Form.Item>

        <Form.Item
          label={<span className="text-white text-sm ">New Password</span>}
          name="new"
          rules={[{ required: true, message: "Please enter new password" }]}
        >
          <Input
            type="password"
            placeholder="Type here..."
            name="new"
            icon
            className="w-full bg-black/20 text-white py-2 border border-[#FFFFFF1A] rounded-[14px] focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </Form.Item>

        <Form.Item
          label={
            <span className="text-white text-sm ">Confirm New Password</span>
          }
          name="confirm"
          dependencies={["new"]}
          rules={[
            { required: false, message: "Please confirm your password" },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("new") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error("Passwords do not match"));
              },
            }),
          ]}
        >
          <Input
            type="password"
            placeholder="Type here..."
            name="confirm"
            icon
            className="w-full bg-black/20 text-white py-2 border border-[#FFFFFF1A] rounded-[14px] focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </Form.Item>

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
            onClick={() => {
              form.resetFields();
              onCancel();
            }}
            className={" text-white w-[100%] py-2  bg-[#4184D6] rounded-[8px]"}
            text={"Change Password"}
          />

        </div>
      </Form>
    </Modal>
  );
};

export default ChangePasswordModal;