'use client';

import SetPriceModal from '@/components/modals/setPrice/setPriceModal';
import { Table, Button } from 'antd';
import { useState } from 'react';

const BatchOverviewTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleSavePrice = (price) => {
    // You can handle the saved price here
    console.log('Price Saved:', price);
    closeModal(); // Close the modal after saving the price
  };
  const pageSize = 5;

  const columns = [
    {
      title: 'Batch #',
      dataIndex: 'batchNumber',
      key: 'batchNumber',
      render: (text) => <span className="text-white">{text}</span>,
    },
    {
      title: 'Total NFTs',
      dataIndex: 'totalNFTs',
      key: 'totalNFTs',
      render: (text) => <span className="text-white">{text}</span>,
    },
    {
      title: 'Price (USDC)',
      dataIndex: 'price',
      key: 'price',
      render: (text) => <span className="text-white">{text}</span>,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => {
        let statusColor = 'bg-[#CF17421A] text-[#CF1742]';
        if (status === 'Active') {
          statusColor = 'bg-[#14E0881A] text-[#14E088]';
        } else if (status === 'Upcoming') {
          statusColor = 'bg-[#F08B111A] text-[#F08B11] ';
        }

        return (
          <span className={` px-2 py-1 rounded-full ${statusColor}`
          
          }
          style={{
            // background: '#4184D6',
            border: 'none',
            // color: 'white',
            text:'14px',
            font:'inter',
            width:'110px',
             padding:'10px 10px'
          }}>
            {status}
          </span>
        );
      },
    },
    {
      title: 'Minted',
      dataIndex: 'minted',
      key: 'minted',
      render: (text) => <span className="text-white">{text}</span>,
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      key: 'actions',
      render: (_, record) => (
        <div>
          {record.status === 'Active' ? (
            <Button type="primary"
            
            className="text-white font-medium px-6 py-1 rounded-[8px]"
          style={{
            background: '#4184D6',
            border: 'none',
            color: 'white',
            width:'134px',
             padding:'16px 32px'
          }}
            >
              Edit
            </Button>
          ) : (
            <Button type="default" 
            className="text-white font-medium rounded-[8px]"
            style={{
              background: '#4184D6',
              border: 'none',
              color: 'white',
              width:'134px',
               padding:'16px 32px'
            }}
            onClick={openModal}
            >
              Set Price
            </Button>
          )}
        </div>
      ),
    },
  ];

  const data = [
    {
      key: '1',
      batchNumber: 'Batch #01',
      totalNFTs: 30,
      price: '12.00',
      status: 'Active',
      minted: '7 / 10',
    },
    {
      key: '2',
      batchNumber: 'Batch #02',
      totalNFTs: 10,
      price: '15.00',
      status: 'Upcoming',
      minted: '2 / 10',
    },
    {
      key: '3',
      batchNumber: 'Batch #03',
      totalNFTs: 10,
      price: 'Not Set',
      status: 'Inactive',
      minted: '0 / 10',
    },
    {
      key: '4',
      batchNumber: 'Batch #04',
      totalNFTs: 10,
      price: 'Not Set',
      status: 'Inactive',
      minted: '2 / 10',
    },
    {
      key: '5',
      batchNumber: 'Batch #05',
      totalNFTs: 10,
      price: 'Not Set',
      status: 'Inactive',
      minted: '0 / 10',
    },
    {
      key: '6',
      batchNumber: 'Batch #06',
      totalNFTs: 10,
      price: 'Not Set',
      status: 'Inactive',
      minted: '2 / 10',
    },
    {
      key: '7',
      batchNumber: 'Batch #07',
      totalNFTs: 10,
      price: 'Not Set',
      status: 'Inactive',
      minted: '0 / 10',
    },
    {
      key: '8',
      batchNumber: 'Batch #08',
      totalNFTs: 10,
      price: 'Not Set',
      status: 'Inactive',
      minted: '2 / 10',
    },
  ];

  return (
    <section className="py-6   rounded-[20px] border border-[#19E3D4]/10 shadow-md">
      <h2 className="text-white text-xl font-semibold mb-4 px-6">Batch Overview</h2>

      <div className="overflow-x-auto ">
        <Table
          columns={columns}
          dataSource={data}
          pagination={{
            current: currentPage,
            pageSize: pageSize,
            total: data.length,
            onChange: (page) => setCurrentPage(page),
            position: ['bottomCenter'],
            showSizeChanger: false,
            itemRender: (current, type, originalElement) => {
              if (type === 'prev') {
                return (
                  <button className="bg-white text-black w-8 h-8 rounded-md">&lt;</button>
                );
              }
              if (type === 'next') {
                return (
                  <button className="bg-white text-black w-8 h-8 rounded-md">&gt;</button>
                );
              }
              return (
                <button className="text-white w-8 h-8 rounded-md hover:bg-white/10">
                  {current}
                </button>
              );
            },
          }}
          bordered={false}
          rowClassName={() => 'border-t border-[#19E3D4]/5'}
          className="custom-ant-table bg-transparent text-white"
        />
      </div>
      <SetPriceModal
        visible={modalVisible}
        onCancel={closeModal}
        onSave={handleSavePrice}
      />
    </section>
  );
};

export default BatchOverviewTable;
