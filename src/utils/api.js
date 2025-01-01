const mockApi = {
  validateWalletAddress: (address) => {
    return address.length > 0; // Simple mock validation
  },
  processPayment: (paymentDetails) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve({ status: 'success', transactionId: '123456' }), 2000);
    });
  },
};

export default mockApi;
