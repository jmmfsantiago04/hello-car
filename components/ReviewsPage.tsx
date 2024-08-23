import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import ReviewCard from './ReviewCard';

const ReviewsPage = () => {
  const reviews = [
    {
      title: '싼타페 DM',
      subtitle: '개인 회생 25회차 저신용인데 홈서비스까지!',
      content: '썬루프있는 상태 좋은 싼타페를 비대면으로 집 앞까지 차를 가져다주셨습니다. 정비도 전체적으로 싹 해주시고 엔진오일 서비스에 친절하게 처리해주셨어요',
      date: '2024.07.07',
      reviewer: '주OO 고객님',
      stars: 5,
    },
    // Add more reviews here
    // Duplicate for demo purposes
    {
      title: '싼타페 DM',
      subtitle: '개인 회생 25회차 저신용인데 홈서비스까지!',
      content: '썬루프있는 상태 좋은 싼타페를 비대면으로 집 앞까지 차를 가져다주셨습니다. 정비도 전체적으로 싹 해주시고 엔진오일 서비스에 친절하게 처리해주셨어요',
      date: '2024.07.07',
      reviewer: '주OO 고객님',
      stars: 5,
    },
    {
      title: '싼타페 DM',
      subtitle: '개인 회생 25회차 저신용인데 홈서비스까지!',
      content: '썬루프있는 상태 좋은 싼타페를 비대면으로 집 앞까지 차를 가져다주셨습니다. 정비도 전체적으로 싹 해주시고 엔진오일 서비스에 친절하게 처리해주셨어요',
      date: '2024.07.07',
      reviewer: '주OO 고객님',
      stars: 5,
    },
    {
      title: '싼타페 DM',
      subtitle: '개인 회생 25회차 저신용인데 홈서비스까지!',
      content: '썬루프있는 상태 좋은 싼타페를 비대면으로 집 앞까지 차를 가져다주셨습니다. 정비도 전체적으로 싹 해주시고 엔진오일 서비스에 친절하게 처리해주셨어요',
      date: '2024.07.07',
      reviewer: '주OO 고객님',
      stars: 5,
    },
    {
      title: '싼타페 DM',
      subtitle: '개인 회생 25회차 저신용인데 홈서비스까지!',
      content: '썬루프있는 상태 좋은 싼타페를 비대면으로 집 앞까지 차를 가져다주셨습니다. 정비도 전체적으로 싹 해주시고 엔진오일 서비스에 친절하게 처리해주셨어요',
      date: '2024.07.07',
      reviewer: '주OO 고객님',
      stars: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white py-8">
      <Head>
        <title>Customer Reviews</title>
      </Head>
      <h1 className="text-[56px] font-bold text-gray-800 mb-4">저희 고객 후기</h1>
      <h2 className="text-[52px] font-semibold text-blue-800 mb-2">평균 평점 4.8</h2>
      <div className="border-b-4 border-blue-600 mx-auto my-8 w-[142px]"></div>
      <div className="relative w-full overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / reviews.length)}%)` }}
        >
          {/* Repeating the reviews multiple times to ensure infinite looping */}
          {reviews.concat(reviews).map((review, index) => (
            <div key={index} className="min-w-[33.33%] flex-shrink-0 px-4">
              <ReviewCard {...review} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewsPage;
