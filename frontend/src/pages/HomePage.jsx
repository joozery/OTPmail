import React, { useState } from 'react';
import logo from '../assets/logo.png';
import noemail from '../assets/noemail.png';

const HomePage = () => {
  const [email, setEmail] = useState('');
  const [emailData, setEmailData] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleSearch = async () => {
    try {
      const res = await fetch('http://localhost:5120/api/get-email');
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

      {showPopup && emailData && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 font-['Prompt']">
          <div className="bg-white rounded-xl w-[95%] max-w-3xl p-4 relative text-black max-h-[90vh] overflow-auto">
            <h2 className="text-xl font-bold mb-4">อีเมลล่าสุดจาก Netflix</h2>
            <p><strong>From:</strong> {emailData.from}</p>
            <p><strong>Subject:</strong> {emailData.subject}</p>

            <div
              className="mt-4 prose max-w-none"
              dangerouslySetInnerHTML={{ __html: emailData.html }}
            />

            <button
              onClick={() => setShowPopup(false)}
              className="bg-red-600 text-white w-full py-2 rounded-lg mt-6"
            >
              ปิด
            </button>
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-2 right-4 text-gray-600 text-xl font-bold"
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