// File: components/FinanceCard.tsx

import React from 'react';


const FinanceCard: React.FC = () => {
  return (
    <div className="card-container">
      <div className="card-content">
        <div className="mb-[19px]">
          <div className="card-image-wrapper">
            <img
              src="/MaskG3.png"
              alt="Finance Icon"
              className="w-[80px] h-[80px]"
            />
          </div>
        </div>
        <h2 className="text-[28px] font-bold text-gray-800 mt-[44px] mb-[24px]">
          금융상품
        </h2>
        <div className="card-line"></div>
        <p className="card-paragraph">
          15년 이상 헬로썸카와 연계하여<br/>
          협력하는 20곳 이상의 금융사와<br/>
          고객 맞춤형 상품으로<br/>
          승인율 최고를 자랑합니다
        </p>
      </div>
    </div>
  );
};

export default FinanceCard;
