import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="flex justify-between">
        <div>
          <a href="/terms" className="p-2">Terms of Service</a>
          <a href="/privacy" className="p-2">Privacy Policy</a>
          <a href="/refund" className="p-2">Refund Policy</a>
          <a href="/contact" className="p-2">Contact Us</a>
        </div>
        <div>
          <span>Contact: info@example.com | +123456789</span>
        </div>
      </div>
      <div className="text-center mt-4">
        © 2023 Payment Gateway UI
      </div>
    </footer>
  );
};

export default Footer;
