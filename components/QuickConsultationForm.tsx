// components/QuickConsultationForm.tsx

import React, { useState, FormEvent } from 'react';
import { submitConsultation } from '../app/actions/submitConsultation';

const QuickConsultationForm: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [name, setName] = useState('');
  const [desiredCar, setDesiredCar] = useState('');
  const [purchaseMethod, setPurchaseMethod] = useState('');

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 3 && value.length <= 7) {
      value = `${value.slice(0, 3)}-${value.slice(3)}`;
    } else if (value.length > 7) {
      value = `${value.slice(0, 3)}-${value.slice(3, 7)}-${value.slice(7, 11)}`;
    }
    setPhoneNumber(value.slice(0, 13));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const result = await submitConsultation({
      name,
      phoneNumber,
      desiredCar,
      purchaseMethod,
    });

    if (result.success) {
      alert('Consultation submitted successfully!');
    } else {
      alert('There was an error submitting the consultation.');
    }
  };

  return (
    <div className="flex flex-row items-center  bg-blue-100 p-[2rem] rounded-lg shadow-lg max-w-full mx-auto" style={{ width: '87.5rem', height: '36.25rem' }}>
      <div className="flex justify-center items-center w-1/2 h-full">
        <img src="/silvercar.png" alt="Car" className="w-[47.375rem] h-[19.0625rem]" />
      </div>
      <div className="w-1/2 h-full flex items-center justify-center">
        <div className="w-full max-w-md">
          <div className="flex items-center mb-[1rem]">
            <h2 className="font-bold" style={{ fontSize: '1.75rem' }}>빠른 상담 신청</h2>
            <p className="text-gray-600 ml-[1rem]" style={{ fontSize: '1rem' }}>*담당자 배정후 빠르게 연락드리도록 하겠습니다.</p>
          </div>
          <form className="space-y-[1rem]" onSubmit={handleSubmit}>
            <div className="flex items-center">
              <label className="block text-sm font-medium text-gray-700 w-[6rem]">이름</label>
              <input 
                type="text" 
                placeholder="이름을 입력해 주세요" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-[0.25rem] block flex-1 px-[0.75rem] py-[0.5rem] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="flex items-center">
              <label className="block text-sm font-medium text-gray-700 w-[6rem]">연락처</label>
              <input 
                type="text" 
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                placeholder="010-5555-4444" 
                className="mt-[0.25rem] block flex-1 px-[0.75rem] py-[0.5rem] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                maxLength={13}
              />
            </div>
            <div className="flex items-center">
              <label className="block text-sm font-medium text-gray-700 w-[6rem]">희망 차량</label>
              <input 
                type="text" 
                placeholder="희망 차량을 입력해 주세요" 
                value={desiredCar}
                onChange={(e) => setDesiredCar(e.target.value)}
                className="mt-[0.25rem] block flex-1 px-[0.75rem] py-[0.5rem] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="flex items-center">
              <label className="block text-sm font-medium text-gray-700 w-[6rem]">구매 방법</label>
              <div className="mt-[0.25rem] flex-1 flex space-x-[1rem]">
                <div className="flex items-center">
                  <input 
                    id="visit-purchase" 
                    name="purchase-method" 
                    type="radio" 
                    className="focus:ring-indigo-500 h-[1rem] w-[1rem] text-indigo-600 border-gray-300" 
                    value="방문 구매"
                    onChange={(e) => setPurchaseMethod(e.target.value)}
                  />
                  <label htmlFor="visit-purchase" className="ml-[0.5rem] block text-sm font-medium text-gray-700">
                    방문 구매
                  </label>
                </div>
                <div className="flex items-center">
                  <input 
                    id="non-face-purchase" 
                    name="purchase-method" 
                    type="radio" 
                    className="focus:ring-indigo-500 h-[1rem] w-[1rem] text-indigo-600 border-gray-300" 
                    value="비대면 구매"
                    onChange={(e) => setPurchaseMethod(e.target.value)}
                  />
                  <label htmlFor="non-face-purchase" className="ml-[0.5rem] block text-sm font-medium text-gray-700">
                    비대면 구매
                  </label>
                </div>
              </div>
            </div>
            <div>
              <button 
                type="submit" 
                className="w-full bg-gray-500 text-white py-[0.5rem] px-[1rem] rounded-md hover:bg-gray-600"
              >
                상담 신청
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default QuickConsultationForm;
