import React from 'react';

const ConfirmationModal = ({ amount, currency, walletAddress, closeModal }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-5 rounded shadow-lg">
        <h2 className="text-xl mb-4">Confirm Payment</h2>
        <p>Amount: {amount} {currency}</p>
        <p>Wallet Address: {walletAddress}</p>
        <div className="flex justify-end space-x-4 mt-4">
          <button className="bg-gray-500 text-white p-2" onClick={closeModal}>Cancel</button>
          <button className="bg-blue-500 text-white p-2">Confirm</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
