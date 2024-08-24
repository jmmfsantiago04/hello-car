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
    <div className="flex flex-col lg:flex-row items-center bg-white p-4 md:p-8 rounded-lg shadow-lg max-w-full mx-auto lg:h-[36.25rem]">
      <div className="flex justify-center items-center w-full lg:w-1/2 h-full mb-4 lg:mb-0">
        <img src="/silvercar.png" alt="Car" className="w-full max-w-lg h-auto" />
      </div>
      <div className="w-full lg:w-1/2 h-full flex items-center justify-center">
        <div className="w-full max-w-md">
          <div className="flex flex-col md:flex-row items-center mb-4">
            <h2 className="font-bold text-lg md:text-xl lg:text-2xl">빠른 상담 신청</h2>
            <p className="text-gray-600 ml-0 md:ml-4 mt-2 md:mt-0 text-sm md:text-base">
              *담당자 배정후 빠르게 연락드리도록 하겠습니다.
            </p>
          </div>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row items-center">
              <label className="block text-sm font-medium text-gray-700 w-full md:w-[6rem]">이름</label>
              <input 
                type="text" 
                placeholder="이름을 입력해 주세요" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 md:mt-0 block flex-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="flex flex-col md:flex-row items-center">
              <label className="block text-sm font-medium text-gray-700 w-full md:w-[6rem]">연락처</label>
              <input 
                type="text" 
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                placeholder="010-5555-4444" 
                className="mt-1 md:mt-0 block flex-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                maxLength={13}
              />
            </div>
            <div className="flex flex-col md:flex-row items-center">
              <label className="block text-sm font-medium text-gray-700 w-full md:w-[6rem]">희망 차량</label>
              <input 
                type="text" 
                placeholder="희망 차량을 입력해 주세요" 
                value={desiredCar}
                onChange={(e) => setDesiredCar(e.target.value)}
                className="mt-1 md:mt-0 block flex-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="flex flex-col md:flex-row items-center">
              <label className="block text-sm font-medium text-gray-700 w-full md:w-[6rem]">구매 방법</label>
              <div className="mt-1 md:mt-0 flex-1 flex space-x-4">
                <div className="flex items-center">
                  <input 
                    id="visit-purchase" 
                    name="purchase-method" 
                    type="radio" 
                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" 
                    value="방문 구매"
                    onChange={(e) => setPurchaseMethod(e.target.value)}
                  />
                  <label htmlFor="visit-purchase" className="ml-2 block text-sm font-medium text-gray-700">
                    방문 구매
                  </label>
                </div>
                <div className="flex items-center">
                  <input 
                    id="non-face-purchase" 
                    name="purchase-method" 
                    type="radio" 
                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" 
                    value="비대면 구매"
                    onChange={(e) => setPurchaseMethod(e.target.value)}
                  />
                  <label htmlFor="non-face-purchase" className="ml-2 block text-sm font-medium text-gray-700">
                    비대면 구매
                  </label>
                </div>
              </div>
            </div>
            <div>
              <button 
                type="submit" 
                className="w-full bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 transition"
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
