import React from 'react';
import howtoImage from '../assets/howto.png';

const HowToModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePreview = () => {
    const newWindow = window.open();
    if (newWindow) {
      newWindow.document.write(`<img src="${howtoImage}" style="width:100%; height:auto;" />`);
      newWindow.document.title = "Preview";
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-xl w-[90%] max-w-2xl p-4 relative font-['Prompt']">
        <h2 className="text-xl font-semibold mb-4">วิธีการใช้งาน</h2>

        <img
          src={howtoImage}
          alt="How to use"
          className="rounded-md mb-4 cursor-pointer hover:opacity-90 transition"
          onClick={handlePreview}
          title="คลิกเพื่อดูภาพเต็ม"
        />

        <button
          onClick={onClose}
          className="bg-red-600 text-white px-6 py-2 rounded-lg w-full"
        >
          เข้าใจแล้ว
        </button>

        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-600 text-xl font-bold"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default HowToModal;
