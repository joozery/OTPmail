import React, { useState } from 'react';
import logo from '../assets/logo.png';
import noemail from '../assets/noemail.png';

const HomePage = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState(null);
  const [notFound, setNotFound] = useState(false);

  // mock OTP data
  const mockOtpDB = {
    'zerryboy28@gmail.com': '658321',
    'user2@netflix.com': '942017',
  };

  const handleSearch = () => {
    if (mockOtpDB[email.trim().toLowerCase()]) {
      setOtp(mockOtpDB[email.trim().toLowerCase()]);
      setNotFound(false);
    } else {
      setOtp(null);
      setNotFound(true);
    }
  };

  return (
    <div className="min-h-screen bg-black flex flex-col justify-center items-center text-white font-['Prompt']">
      <div className="flex flex-col justify-center items-center gap-4">
        <img src={logo} alt="Logo" className="w-32 h-auto mb-4" />
        <h1 className="text-4xl font-bold">Tomoru Netflix OTP</h1>
        <p className="text-lg">กรุณากรอกอีเมล Netflix ที่ลูกค้าซื้อมา</p>

        <div className="flex gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            className="p-2 rounded-lg text-black w-80"
          />
          <button
            onClick={handleSearch}
            className="bg-blue-500 px-6 py-2 rounded-lg"
          >
            ค้นหาอีเมล
          </button>
        </div>

        <small>**ลิงค์ มีอายุ 15 นาที ^_^</small>

        <div className="mt-10 flex flex-col items-center">
          {otp && (
            <>
              <p className="text-lg">OTP ของคุณคือ:</p>
              <div className="text-2xl font-bold bg-gray-800 px-6 py-2 rounded-lg mt-2">
                {otp}
              </div>
            </>
          )}

          {notFound && (
            <>
              <img src={noemail} alt="No Email" className="w-20 h-auto" />
              <p className="text-sm mt-2">ไม่พบอีเมล</p>
            </>
          )}
        </div>
      </div>

      <footer className="mt-auto py-4">
        <small>©Tomoru Official 2024</small>
      </footer>
    </div>
  );
};

export default HomePage;
