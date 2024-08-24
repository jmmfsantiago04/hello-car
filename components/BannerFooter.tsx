import Image from 'next/image';
import Link from 'next/link';

const BannerFooter = () => {
  return (
    <div className="relative w-full h-[27.5rem]">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(/BannerFooter.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'multiply',
        }}
      ></div>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white z-10">
        <h2 className="text-base md:text-2xl font-semibold leading-relaxed md:leading-relaxed">
          전문적인 노하우로 최저금리와 최고한도의 원하시는 차량을 신속정확하게
        </h2>
        <p className="mt-1 rem text-base md:text-2xl leading-relaxed">
          헬로썸카의 전문 시스템이 있다면 가능합니다. <br />
          헬로썸카가 최저가 차량 견적부터 출고까지 책임지겠습니다!
        </p>
        <Link href="/contact">
          <button className="mt-2 rem w-[12.5rem] md:w-[30rem] h-[3.125rem] bg-white bg-opacity-30 text-white text-base font-semibold rounded hover:bg-opacity-50 transition">
            상담 신청 하기
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BannerFooter;
