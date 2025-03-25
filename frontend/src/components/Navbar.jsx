import React, { useState } from 'react';
import logo from '../assets/logo1.png';
import howtoImage from '../assets/howto.jpg';

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <nav className="w-full bg-pink-100 flex justify-between items-center px-6 py-3 font-['Prompt'] shadow-md">
        <img src={logo} alt="Logo" className="w-36 h-auto" />
        <button
          className="text-pink-700 border border-pink-300 hover:bg-pink-200 transition rounded-xl px-6 py-2 font-['Prompt'] shadow-sm"
          onClick={() => setShowModal(true)}
        >
          วิธีใช้งาน
        </button>
      </nav>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white rounded-xl w-[90%] max-w-2xl p-6 relative font-['Prompt'] shadow-lg">
            <h2 className="text-xl font-semibold mb-4 text-pink-700">วิธีการใช้งาน</h2>
            <img src={howtoImage} alt="How to use" className="rounded-md mb-4" />
            <button
              onClick={() => setShowModal(false)}
              className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-lg w-full"
            >
              เข้าใจแล้ว
            </button>
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-3 text-gray-500 text-xl font-bold hover:text-gray-800"
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