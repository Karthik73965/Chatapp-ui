import React, { useState } from 'react';

const OtpInput = ({ length, onChange }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    const newOtp = [...otp];
    newOtp[index] = element.value;

    setOtp(newOtp);

    // Focus next input if current input is filled
    if (element.nextSibling && element.value) {
      element.nextSibling.focus();
    }

    // Focus previous input if current input is deleted
    if (!element.value && index > 0) {
      element.previousSibling.focus();
    }

    onChange(newOtp.join(''));
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const data = e.clipboardData.getData('text').slice(0, length);
    const newOtp = [...data.split('').map((char, index) => char)];
    setOtp(newOtp);
    onChange(newOtp.join(''));

    // Focus next input after paste if not fully filled
    const nextIndex = data.length < length ? data.length : -1;
    if (nextIndex >= 0) {
      const inputs = e.target.parentNode.childNodes;
      inputs[nextIndex].focus();
    }
  };

  return (
    <div onPaste={handlePaste} className="flex space-x-2 justify-center">
      {otp.map((data, index) => (
        <input
          className="w-12 h-12 border font-bold rounded-md text-center form-control focus:outline-none focus:border-blue-500"
          type="text"
          key={index}
          value={data}
          maxLength="1"
          onChange={(e) => handleChange(e.target, index)}
          onFocus={(e) => e.target.select()}
          onKeyDown={(e) => e.key === 'Backspace' && !e.target.value && handleChange(e.target, index - 1)}
        />
      ))}
     
    </div>
  );
};

export default function App() {
  const handleOtpChange = (otp) => {
    console.log(otp);
  };

  return (
    <div className="App">
      <OtpInput length={6} onChange={handleOtpChange} />
    </div>
  );
}
