import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white text-black px-8 py-12 font-['Prompt']">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>

      <p className="mb-4">
        เราให้ความสำคัญกับความเป็นส่วนตัวของผู้ใช้งานอย่างสูงสุด แอปนี้ใช้ Google OAuth 2.0 และ Gmail API เพื่อเข้าถึงอีเมลที่ส่งจาก <strong>info@account.netflix.com</strong> เท่านั้น โดยข้อมูลที่ดึงมาใช้เพื่อแสดงรหัส OTP สำหรับยืนยันตัวตนของคุณ
      </p>

      <p className="mb-4">
        - แอปนี้จะไม่เก็บข้อมูล Gmail หรือเนื้อหาอีเมลใดๆ ลงในระบบของเรา<br />
        - ข้อมูลจะถูกใช้แบบชั่วคราวภายใน session และไม่ถูกแชร์กับบุคคลภายนอก<br />
        - แอปนี้ไม่ได้เข้าถึงอีเมลอื่นใดของคุณนอกจากที่มาจาก Netflix<br />
        - คุณสามารถเพิกถอนสิทธิ์การเข้าถึงได้ตลอดเวลา ผ่านหน้า Google Account
      </p>

      <p className="mb-4">
        แอปของเราไม่ได้ใช้ข้อมูลส่วนบุคคลของคุณเพื่อวัตถุประสงค์ทางการตลาดหรือเชิงพาณิชย์ และไม่มีการขายข้อมูลให้กับบุคคลที่สาม
      </p>

      <p className="mb-4">
        หากคุณมีคำถามเพิ่มเติมเกี่ยวกับนโยบายความเป็นส่วนตัวนี้ กรุณาติดต่อทีมงานผ่านอีเมลที่ลงทะเบียนไว้กับแอป
      </p>

      <p className="mt-6 text-sm text-gray-500">อัปเดตล่าสุด: 25 มีนาคม 2025</p>
    </div>
  );
};

export default PrivacyPolicy;