import React from 'react';

interface ReviewCardProps {
  title: string;
  subtitle: string;
  content: string;
  date: string;
  reviewer: string;
  stars: number;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ title, subtitle, content, date, reviewer, stars }) => {
  return (
    <div className="w-[27.5rem] h-[20rem] border border-gray-300 rounded-lg shadow-md p-6 relative">
      {/* Horizontal Bar */}
      <div className="w-[9.0625rem] h-[0.125rem] bg-blue-800 absolute top-[7.5rem] left-[2rem]"></div>

      {/* Title */}
      <h2 className="text-gray-800 mb-1 font-bold w-[7.75rem] h-[2.25rem] text-[1.375rem]">
        {title}
      </h2>

      {/* Subtitle */}
      <p className="text-sm font-semibold text-blue-800 absolute top-[8.125rem] left-[2rem]">{subtitle}</p>

      {/* Content */}
      <div className="absolute bottom-[4.6875rem] left-0 right-0 px-6">
        <p className="w-[21.375rem] h-[3.9375rem] text-gray-700 text-[0.875rem] mb-2">{content}</p>

        {/* Stars */}
        <div className="flex items-center justify-start mt-2">
          <div className="flex text-yellow-500">
            {Array(stars).fill(null).map((_, i) => (
              <svg key={i} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
              </svg>
            ))}
          </div>
        </div>
      </div>

      {/* Reviewer */}
      <p className="absolute bottom-[1.5625rem] left-6 text-gray-600 text-sm">{reviewer}</p>

      {/* Date */}
      <p className="absolute bottom-[1.5625rem] right-6 text-gray-500 text-sm">{date}</p>
    </div>
  );
}

export default ReviewCard;
