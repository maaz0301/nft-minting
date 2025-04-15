import React, { useState, useEffect } from 'react';
import { Modal } from 'antd';
import Button from '@/components/shared/button';
import Input from '@/components/shared/input';

const SetPriceModal = ({ visible, onCancel, onSave, initialPrice = '' }) => {
  const [price, setPrice] = useState(initialPrice.toString());
  const [isValid, setIsValid] = useState(false);

  // Reset state when modal opens/closes or initialPrice changes
  useEffect(() => {
    const initialValue = initialPrice.toString();
    setPrice(initialValue);
    validatePrice(initialValue);
  }, [visible, initialPrice]);

  const validatePrice = (value) => {
    const numericPrice = parseFloat(value);
    const valid = value.trim() !== '' && !isNaN(numericPrice) && numericPrice >= 0;
    setIsValid(valid);
  };

  const handlePriceChange = (e) => {
    const value = e.target.value;
    if (/^\d*\.?\d*$/.test(value)) {
      setPrice(value);
      validatePrice(value);
    }
  };

  const handleSave = () => {
    if (isValid) onSave(parseFloat(price));
  };

  return (
    <Modal
      title="Set Price"
      open={visible}
      onCancel={onCancel}
      className="create-fundraiser-modal"
      footer={null} // We control footer via JSX
      styles={{
        body: {
          fontSize: 16,
          padding: 20
        }
      }}
      width={400}
      destroyOnClose
    >
      <div className="space-y-4">
        <div className="space-y-2">
          <label
            htmlFor="price-input"
            className="block text-sm font-medium text-gray-700"
          >
            Set Price In USDC
          </label>
          <Input
            id="price-input"
            value={price}
            onChange={handlePriceChange}
            placeholder="Enter price (e.g., 10.5)"
            type="text"
            inputMode="decimal"
            className="w-full"
          />
          {!isValid && price.trim() !== '' && (
            <p className="text-red-500 text-xs mt-1">
              Please enter a valid non-negative number
            </p>
          )}
        </div>

        <div className="flex justify-end gap-3 mt-6">
          <Button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 border border-gray-300 text-gray-700"
            text="Cancel"
          />
          <Button
            type="button"
            onClick={handleSave}
            className={`px-4 py-2 text-white ${
              isValid ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-400 cursor-not-allowed'
            }`}
            text="Set Price"
            disabled={!isValid}
          />
        </div>
      </div>
    </Modal>
  );
};

export default SetPriceModal;