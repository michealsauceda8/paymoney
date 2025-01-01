import React from 'react';
import jsPDF from 'jspdf';

const SuccessPage = ({transactionId, amount, date, walletAddress}) => {
  const downloadReceipt = () => {
    const doc = new jsPDF();
    doc.text(`Transaction ID: ${transactionId}`, 10, 10);
    doc.text(`Amount: ${amount}`, 10, 20);
    doc.text(`Date: ${date}`, 10, 30);
    doc.text(`Wallet Address: ${walletAddress}`, 10, 40);
    doc.save('receipt.pdf');
  };

  return (
    <div className="max-w-xl mx-auto p-5 text-center">
      <h1 className="text-2xl font-bold">Thank You!</h1>
      <p>Your payment was successful!</p>
      <p>Transaction ID: {transactionId}</p>
      <p>Amount: {amount}</p>
      <button onClick={downloadReceipt} className="bg-blue-500 text-white p-2">Download Receipt</button>
    </div>
  );
};

export default SuccessPage;
