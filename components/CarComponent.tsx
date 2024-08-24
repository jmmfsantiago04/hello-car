import Image from 'next/image';
import AboutCar from '../public/AboutCar.png';

const CarComponent = () => {
  return (
    <main className="bg-white flex flex-col items-center">
      <section className="flex flex-col lg:flex-row max-w-7xl mx-auto">

        <article className="flex flex-col justify-center w-full lg:w-1/2 px-4 lg:px-0 mt-8 lg:mt-[9rem]">
          <header>
            <h1 className="text-3xl lg:text-4xl font-bold mb-4 lg:mb-[2rem] lg:ml-[8.125rem] text-center lg:text-left">
              안녕하세요<br/> <span className="text-blue-600">헬로썸카</span> 입니다
            </h1>
            <div className="mb-8 lg:mb-[4rem] mx-auto lg:ml-[8.125rem] w-[6.25rem] h-[0.25rem] bg-blue-600"></div>
          </header>
          <p className="text-gray-600 mb-6 lg:mb-[3rem] mx-auto lg:ml-[8.125rem] w-full lg:w-[27.5rem] text-[0.9375rem] leading-relaxed text-center lg:text-left">
            헬로썸카는 신용 때문에 차량이 필요했어도 구매가 어려웠던 분들<br/>을 위해 과거 연체 이력이
            있어도, 신용이 낮아도, 회생,<br/> 회복, 파산 진행 중이어도 경력 15년의 노하우로 자체심사와
            예외<br/> 승인을 통하여 높은 승인률로 할부를 진행해 드립니다.
          </p>
          <p className="text-gray-600 mx-auto lg:ml-[8.125rem] w-full lg:w-[27.5rem] text-[0.9375rem] leading-relaxed text-center lg:text-left">
            저신용자인 경우 금리가 부담스러울 수 밖에 없지만<br/> 저희 헬로썸카는 그러한 상황에 맞춘
            금융 설계로 타 업체보다<br/> 저렴한 금리로 진행될수 있도록 직접 딜러를 뛰어 이용이 가능하도<br/>록
            저희 헬로썸카가 꼼꼼하게 진행하여 안전한 거래를 진행하도록<br/> 약속드리겠습니다.
          </p>
        </article>

        <aside className="w-full lg:w-1/2 mt-8 lg:mt-0 flex justify-center lg:justify-end lg:ml-[10rem]">
          <Image
            src={AboutCar}
            alt="Car Image"
            width={800}
            height={700}
            className="object-cover"
          />
        </aside>
      </section>

      <footer className="w-full bg-blue-800 text-white text-center py-12 lg:py-[4.375rem] mt-12 lg:mt-[9rem]">
        <h2 className="text-2xl lg:text-3xl font-bold">HELLO썸카</h2>
      </footer>
    </main>
  );
};

export default CarComponent;
