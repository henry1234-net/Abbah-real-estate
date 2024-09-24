import React from 'react';
import '@/app/globals.css';
import Navigation from '@/components/navbar';
import Image from 'next/image';
import '@/app/scrollbar.css';

export default function LoginPage() {
  const allImage = ['/HeroImg.png', '/HeroImg.png', '/HeroImg.png', '/HeroImg.png', '/HeroImg.png', '/HeroImg.png'];

  return (
    <div className='max-w-screen relative'>
      <div className="fixed top-0 left-0 z-10 w-full flex flex-col items-center justify-center"> 
        <Navigation /> 
      </div>
      <div className='bg-abbah-milk/50 flex md:flex-row flex-col relative rounded-md z-0 pt-16 p-3 w-full md:h-screen h-fit'>
        <div className="md:w-1/2 h-full md:mt-[4%] p-4 md:relative">
          <h2 className='text-abbah-black-100 md:text-[40px] text-[30px] md:text-left text-center font-semibold'>
            Find your way <span className='text-abbah-main-green font-bold'>Home</span> with us
          </h2>
          <p className='md:text-xl text-lg mt-4 text-justify'>
            Your journey to finding the perfect property starts here. Explore our listings to find your dream home or reach out to us for personalized assistance.
          </p>

          <div className='flex flex-row items-center mt-6 md:mt-10 md:text-lg text-base pb-2'>
            <a href="../buy">
              <button className='bg-abbah-red/10 backdrop-blur-sm text-abbah-red hover:text-abbah-milk border hover:border-abbah-milk border-abbah-red hover:bg-abbah-red py-3 px-6 rounded-md mr-6 transition-all'>
              Explore Listings
              </button>
            </a>
            <a href="../contact">
              <button className='bg-abbah-main-green/10 backdrop-blur-sm text-abbah-main-green hover:text-abbah-milk hover:bg-abbah-main-green border hover:border-abbah-milk border-abbah-main-green py-3 px-6 rounded-md ml-6 transition-all'>
                Contact Us
              </button>
            </a>
          </div>

          <div className="w-full md:flex flex-row items-center justify-center hidden">
        <div className="flex md:flex-row flex-col items-center justify-around text-center mt-[30px] text-abbah-main-green md:text-xl text-md font-bold bg-abbah-main-green/10 backdrop-blur-sm border border-abbah-main-green p-2 rounded-md w-full md:mt-[13%]">
          <div className="flex flex-col mb-2">
            <p>17k+</p>
            <p className="font-normal">Satisfied Customers</p>
          </div>
          <div className="flex flex-col mb-2">
            <p>30+</p>
            <p className="font-normal">Years of Experience</p>
          </div>
          <div className="flex flex-col">
            <p>50k+</p>
            <p className="font-normal">Agents</p>
          </div>
        </div>
      </div>        
        </div>

        <div className="md:w-1/2 h-fit relative order-first md:order-last">
          <Image
            src={allImage[0]}
            alt='Hero Image'
            layout='responsive'
            width={700}
            height={500}
            objectFit='contain'
          />
        </div>
      </div>

      <div className="w-full flex flex-row items-center justify-center px-4 md:hidden">
        <div className="flex md:flex-row flex-col items-center justify-around text-center mt-[30px] text-abbah-main-green md:text-xl text-md font-bold bg-abbah-main-green/10 backdrop-blur-sm border border-abbah-main-green p-2 rounded-md w-full md:mt-[15%]">
          <div className="flex flex-col mb-2">
            <p>17k+</p>
            <p className="font-normal">Satisfied Customers</p>
          </div>
          <div className="flex flex-col mb-2">
            <p>30+</p>
            <p className="font-normal">Years of Experience</p>
          </div>
          <div className="flex flex-col">
            <p>50k+</p>
            <p className="font-normal">Agents</p>
          </div>
        </div>
      </div>
      

      <div className='w-full h-fit flex flex-col bg-abbah-white mt-4 p-4 rounded-lg overflow-hidden'>
        <span className='text-[13px] text-abbah-light-green'>Best Choice</span>
        <span className="text-lg"> Popular Residences </span>

        <div className='flex flex-row overflow-x-scroll scrollbar-thin'>
          {allImage.map((imageSrc, index) => (
            <div key={index} className='bg-abbah-milk/20 rounded-md mr-3 relative my-3 hover:-translate-y-2 transition-all'>
              <div className='bg-abbah-milk/50 hover:bg-abbah-main-green/10 hover:backdrop-blur-sm rounded-md h-[180px] flex-shrink-0 relative'>
                <Image
                  src={imageSrc}
                  alt={`image ${index + 1}`}
                  layout='fill'
                  className='rounded-md'
                  objectFit='contain'
                />
              </div>
              <div className='flex flex-col text-xs p-4'>
                Abbah Estate, kubwa, Abuja
                <span className='flex flex-row'><span className='text-abbah-main-green'> ₦1,000,000</span>/year</span>
                <hr className='my-2'/>
                <span className='flex flex-row justify-between'>
                  <span className='mx-1 whitespace-nowrap'>🛏 3 bedrooms</span>
                  <span className='mx-1 whitespace-nowrap'>🚽 4 bathrooms</span>
                  <span className='mx-1 whitespace-nowrap'>📐 1,000sqm</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='bg-abbah-milk/50 block md:flex-row relative rounded-md z-0 mt-8 p-3 w-full'>
        {/* Additional content can go here */}
      </div>
    </div>
  );
}