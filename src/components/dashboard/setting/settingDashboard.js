'use client';

import React, { useState } from 'react';
import { Table, Button, Modal } from 'antd';

const WalletSettings = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedWallet, setSelectedWallet] = useState(null);

  // Data for the wallet table
  const walletData = [
    {
      key: '1',
      walletType: 'Multisig Wallet',
      walletAddress: '0xAB12...cd34',
    },
    {
      key: '2',
      walletType: 'Rewards Distributor',
      walletAddress: '0xDD34...aa56',
    },
  ];

  // Columns for the table
  const columns = [
    {
      title: 'Wallet Type',
      dataIndex: 'walletType',
      key: 'walletType',
    },
    {
      title: 'Wallet Address',
      dataIndex: 'walletAddress',
      key: 'walletAddress',
      render: (text) => (
        <span title={text} style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {text}
        </span>
      ),
    },
    {
      title: 'Actions',
      key: 'action',
      render: (_, record) => (
        <Button
          type="primary"
          onClick={() => handleEditClick(record)}
          aria-label={`Edit ${record.walletType} settings`}
        >
          Edit
        </Button>
      ),
    },
  ];

  // Handle the "Edit" button click
  const handleEditClick = (record) => {
    setSelectedWallet(record);
    setIsModalVisible(true);
  };

  // Handle modal close
  const handleModalClose = () => {
    setIsModalVisible(false);
    setSelectedWallet(null);
  };

  // Handle save changes logic
  const handleSaveChanges = () => {
    // Your save logic here
    console.log('Changes saved for:', selectedWallet);
    handleModalClose();
  };

  return (
    <section className="wallet-settings-container">
      <h2 className="section-title">Wallet Settings</h2>

      <Table
        columns={columns}
        dataSource={walletData}
        pagination={false}
        bordered
        // rowClassName="wallet-row"
        //  rowClassName="hover:bg-[#ffffff05] transition"
          className="custom-ant-table"
      />

      {/* Edit Modal */}
      <Modal
        title={`Edit ${selectedWallet?.walletType} Settings`}
        visible={isModalVisible}
        onCancel={handleModalClose}
        footer={[
          <Button key="cancel" onClick={handleModalClose} style={{ backgroundColor: '#CF1742', color: 'white' }}>
            Cancel
          </Button>,
          <Button key="save" type="primary" onClick={handleSaveChanges}>
            Save Changes
          </Button>,
        ]}
        width={400}
      >
        <div className="modal-content">
          <p><strong>Wallet Type:</strong> {selectedWallet?.walletType}</p>
          <p><strong>Wallet Address:</strong> {selectedWallet?.walletAddress}</p>
          {/* You can add more fields here to edit */}
        </div>
      </Modal>
    </section>
  );
};

export default WalletSettings;
