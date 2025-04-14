"use client";

import React from "react";
import { Modal, List, Typography, Space, Button } from "antd";
import { CheckCircleOutlined, DollarCircleOutlined, MailOutlined } from "@ant-design/icons";
import Image from "next/image";

// Sample notification data
const notifications = [
  {
    key: 1,
    type: "Reward",
    message: "🎉 You won the \"OG Cat WL Spot\" fundraiser! Claim now.",
    time: "Just Now",
    icon: <CheckCircleOutlined style={{ color: "#14E088" }} />,
  },
  {
    key: 2,
    type: "Reward",
    message: "💰 You claimed 7.8 USDC from Burner NFT rewards.",
    time: "Today, 2:00 PM",
    icon: <DollarCircleOutlined style={{ color: "#14E088" }} />,
  },
  {
    key: 3,
    type: "OG Cat",
    message: "📬 OG Cat #823 was listed for 25 USDC.",
    time: "1 hour ago",
    icon: <MailOutlined style={{ color: "#14E088" }} />,
  },
];

const NotificationModal = ({ isVisible, handleCancel }) => {
  return (
    <Modal
      title="Notifications"
      open={isVisible}
      onCancel={handleCancel}

      //  onCancel={onCancel}  // ← this should stay a function
            closeIcon={
              <Image
                src="/assets/icons/onclose.svg"
                alt="close"
                className="w-5 h-5 cursor-pointer hover:opacity-80"
                height={20}
                width={20}
              />}
            
      footer={null}
      width={600}
      className="custom-modal" // Add custom class for modal
    >
      <div style={{ color: "#fff" }}>
        {/* Notifications List */}
        <Button
          type="link"
          style={{
            color: "#14E088",
            fontSize: "14px",
            textAlign: "right",
            display: "block", // Ensure it's aligned properly
            marginBottom: "10px",
          }}
        >
          Mark all as read
        </Button>

        <List
          dataSource={notifications}
          renderItem={(notification) => (
            <div
              style={{
                marginBottom: "15px",
                padding: "10px",
                borderBottom: "1px solid #333",
              }}
            >
              <Space size="middle" style={{ width: "100%" }}>
                {/* Notification Icon */}
                <div
                  style={{
                    borderRadius: "50%",
                    padding: "8px",
                    backgroundColor: "#0a1c1d", // Subtle background for icon
                  }}
                >
                  {notification.icon}
                </div>

                {/* Notification Message */}
                <div style={{ flex: 1 }}>
                  <Typography.Text
                    style={{
                      fontWeight: "bold",
                      color: "#fff",
                    }}
                  >
                    {notification.type}
                  </Typography.Text>
                  <Typography.Text
                    style={{
                      display: "block",
                      color: "#ccc",
                      marginTop: "5px",
                    }}
                  >
                    {notification.message}
                  </Typography.Text>
                  <Typography.Text
                    style={{
                      fontSize: "12px",
                      color: "#bbb",
                      marginTop: "5px",
                    }}
                  >
                    {notification.time}
                  </Typography.Text>
                </div>
              </Space>
            </div>
          )}
        />
      </div>
    </Modal>
  );
};

export default NotificationModal;
