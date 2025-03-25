import React, { useState } from 'react';
import logo from '../assets/logo1.png';
import noemail from '../assets/noemail.png';

const HomePage = () => {
  const [email, setEmail] = useState('');
  const [emailData, setEmailData] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleSearch = async () => {
    try {
      const res = await fetch('https://netflix-otp-api-61951cff18cb.herokuapp.com/api/get-email');
      const data = await res.json();
      if (!data || !data.html) {
        setNotFound(true);
        setShowPopup(false);
        return;
      }
      setEmailData(data);
      setShowPopup(true);
      setNotFound(false);
    } catch (err) {
      console.error('เกิดข้อผิดพลาดในการดึงอีเมล:', err);
      setNotFound(true);
      setShowPopup(false);
    }
  };

  return (
    <div className="min-h-screen bg-pink-50 flex flex-col justify-center items-center text-pink-900 font-['Prompt'] px-4">
      <div className="flex flex-col justify-center items-center gap-4 mt-10">
        <img src={logo} alt="Logo" className="w-36 h-auto mb-4" />
        <h1 className="text-4xl font-bold text-pink-800">APP Netflix OTP</h1>
        <p className="text-lg">กรุณากรอกอีเมล Netflix ที่ลูกค้าซื้อมา</p>

        <div className="flex gap-2 mt-2 flex-wrap justify-center">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            className="p-3 rounded-lg text-pink-900 w-80 bg-white border border-pink-300 shadow-sm focus:outline-pink-400"
          />
          <button
            onClick={handleSearch}
            className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-lg transition"
          >
            ค้นหาอีเมล
          </button>
        </div>

        <small className="text-sm text-pink-500 mt-2">**ลิงก์ มีอายุ 15 นาที ^_^</small>

        {notFound && (
          <div className="mt-10 flex flex-col items-center">
            <img src={noemail} alt="No Email" className="w-20 h-auto" />
            <p className="text-sm mt-2 text-gray-600">ไม่พบอีเมล</p>
          </div>
        )}
      </div>

      <footer className="mt-auto py-6 text-sm text-pink-400">
        ©APP Official 2025
      </footer>

      {showPopup && emailData && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 font-['Prompt'] px-2">
          <div className="bg-white rounded-xl w-full max-w-3xl p-6 relative text-black max-h-[90vh] overflow-auto shadow-xl">
            <h2 className="text-xl font-bold text-pink-700 mb-3">อีเมลล่าสุดจาก Netflix</h2>
            <p className="mb-1"><strong>From:</strong> {emailData.from}</p>
            <p className="mb-4"><strong>Subject:</strong> {emailData.subject}</p>

            <div
              className="prose max-w-none"
              dangerouslySetInnerHTML={{ __html: emailData.html }}
            />

            <button
              onClick={() => setShowPopup(false)}
              className="bg-pink-500 hover:bg-pink-600 text-white w-full py-2 rounded-lg mt-6"
            >
              ปิด
            </button>
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-2 right-4 text-gray-500 text-xl font-bold hover:text-gray-800"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;