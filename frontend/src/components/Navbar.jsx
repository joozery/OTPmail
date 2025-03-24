import React, { useState } from 'react';
import logo from '../assets/logo.png';
import howtoImage from '../assets/howto.jpg';

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <nav className="w-full bg-black flex justify-between items-center px-6 py-3 font-['Prompt'] ">
        <img src={logo} alt="Logo" className="w-36 h-auto" />
        <button
          className="text-white border border-blue-500 hover:bg-blue-600 transition rounded-xl px-6 py-2 font-['Prompt'] shadow-sm"
          onClick={() => setShowModal(true)}
        >
          วิธีใช้งาน
        </button>
      </nav>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-xl w-[90%] max-w-2xl p-4 relative font-['Prompt']">
            <h2 className="text-xl font-semibold mb-4">วิธีการใช้งาน</h2>
            <img src={howtoImage} alt="How to use" className="rounded-md mb-4" />
            <button
              onClick={() => setShowModal(false)}
              className="bg-red-600 text-white px-6 py-2 rounded-lg w-full"
            >
              เข้าใจแล้ว
            </button>
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-3 text-gray-600 text-xl font-bold"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;