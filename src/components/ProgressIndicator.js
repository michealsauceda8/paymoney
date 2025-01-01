import React from 'react';

const ProgressIndicator = ({ step }) => {
  return (
    <div className="flex space-x-4 mb-4">
      <div className={`flex-1 text-center ${step === 1 ? 'font-bold' : ''}`}>Step 1: Details</div>
      <div className={`flex-1 text-center ${step === 2 ? 'font-bold' : ''}`}>Step 2: Confirmation</div>
      <div className={`flex-1 text-center ${step === 3 ? 'font-bold' : ''}`}>Step 3: Payment</div>
    </div>
  );
};

export default ProgressIndicator;
