import React, { useState } from 'react';
import { validateEmail, validatePhoneNumber } from '../utils/validation';
import QRCode from 'qrcode.react';
import ProgressIndicator from './ProgressIndicator';
import ConfirmationModal from './ConfirmationModal';

const PaymentForm = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('USD');
  const [walletAddress, setWalletAddress] = useState('');
  const [promoCode, setPromoCode] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = {};
    if (!fullName) formErrors.fullName = "Full Name is required";
    if (!validateEmail(email)) formErrors.email = "Invalid Email";
    if (!validatePhoneNumber(phone)) formErrors.phone = "Invalid Phone Number";
    if (!amount) formErrors.amount = "Payment Amount is required";
    if (!walletAddress) formErrors.walletAddress = "Wallet Address is required";
    
    setErrors(formErrors);
    if (Object.keys(formErrors).length === 0) {
      setIsModalOpen(true);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-5">
      <ProgressIndicator />
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Full Name" className={`border ${errors.fullName ? 'border-red-500' : 'border-gray-300'} p-2 w-full`} />
        {errors.fullName && <span className="text-red-500">{errors.fullName}</span>}
        
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className={`border ${errors.email ? 'border-red-500' : 'border-gray-300'} p-2 w-full`} />
        {errors.email && <span className="text-red-500">{errors.email}</span>}
        
        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone Number" className={`border ${errors.phone ? 'border-red-500' : 'border-gray-300'} p-2 w-full`} />
        {errors.phone && <span className="text-red-500">{errors.phone}</span>}
        
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Payment Amount" className={`border ${errors.amount ? 'border-red-500' : 'border-gray-300'} p-2 w-full`} />
        {errors.amount && <span className="text-red-500">{errors.amount}</span>}
        
        <select value={currency} onChange={(e) => setCurrency(e.target.value)} className="border p-2 w-full">
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
        </select>

        <input type="text" value={walletAddress} onChange={(e) => setWalletAddress(e.target.value)} placeholder="Pi Wallet Address" className={`border ${errors.walletAddress ? 'border-red-500' : 'border-gray-300'} p-2 w-full`} />
        {errors.walletAddress && <span className="text-red-500">{errors.walletAddress}</span>}
        <QRCode value={walletAddress} />

        <input type="text" value={promoCode} onChange={(e) => setPromoCode(e.target.value)} placeholder="Promo Code" className="border p-2 w-full" />

        <button type="submit" className={`bg-blue-500 text-white p-2 w-full ${isSubmitting ? 'opacity-50' : ''}`} disabled={isSubmitting}>
          {isSubmitting ? 'Processing...' : 'Pay with Pi'}
        </button>
      </form>
      {isModalOpen && <ConfirmationModal amount={amount} currency={currency} walletAddress={walletAddress} closeModal={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default PaymentForm;
