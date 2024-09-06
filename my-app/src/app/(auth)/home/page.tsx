import React from 'react';
import '@/app/globals.css';
import Navigation from '@/components/navbar';
import Image from 'next/image';

export default function LoginPage() {
  const allImage = ['/HeroImg.png', '/HeroImg.png', '/HeroImg.png', '/HeroImg.png', '/HeroImg.png', '/HeroImg.png'];

  return (
    <div className='p-3 max-w-screen'>
      <Navigation />
      <div className='bg-abbah-milk/50 flex md:flex-row flex-col relative rounded-md'>
        <div className="md:w-1/2 h-full md:mt-[4%] text-left p-4 md:relative">
          <h2 className='text-abbah-black-100 md:text-[40px] text-[30px] font-semibold'>
            Find your way <span className='text-abbah-main-green font-bold'>Home</span> with us
          </h2>
          <p className='md:text-xl text-lg mt-4'>
            Your journey to finding the perfect property starts here. Explore our listings to find your dream home or reach out to us for personalized assistance.
          </p>

          <div className='flex flex-row items-center mt-10 md:text-lg text-base text-abbah-milk'>
            <button className='bg-abbah-red p-2 rounded-md mr-6 hover:scale-105 transition-transform'>
              Explore Listings
            </button>
            <button className='bg-abbah-main-green p-2 rounded-md ml-6 hover:scale-105 transition-transform'>
              Contact Us
            </button>
          </div>

          <div className="flex flex-row items-center justify-around text-center mt-[30px] text-abbah-main-green md:text-xl text-xs font-semibold bg-abbah-main-green/10 backdrop-blur-sm border border-abbah-main-green p-2 rounded-md md:w-[90%] w-full md:mt-[15%]">
            <div className="flex flex-col">
              <p>17k+</p>
              <p>Satisfied Customers</p>
            </div>
            <div className="flex flex-col">
              <p>30+</p>
              <p>Years of Experience</p>
            </div>
            <div className="flex flex-col">
              <p>50k+</p>
              <p>Agents</p>
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

      <div className='w-full h-fit flex flex-col bg-abbah-white mt-4 p-2 rounded-lg overflow-hidden'>
        <span className='text-[9px] text-abbah-light-green'>Best Choice</span>
        Popular Residences

        <div className='flex flex-row overflow-x-scroll'>
          {allImage.map((imageSrc, index) => (
            <div key={index} className='bg-white rounded-md mx-2 relative my-3'>
              <div className='bg-abbah-milk rounded-md h-[180px] flex-shrink-0 relative'>
                <Image
                  src={imageSrc}
                  alt={`image ${index + 1}`}
                  layout='fill'
                  className='rounded-md'
                  objectFit='cover'
                />
              </div>
              <div className='flex flex-col text-xs p-4'>
                <div>
                  Abbah Estate, kubwa, Abuja
                  <span className='text-abbah-light-green'> ₦1,000,000</span>/month
                </div>
                <hr className='my-2'/>
                <span className='flex flex-row justify-between'>
                  <span className='mx-1'>🛏 3 bedrooms</span>
                  <span className='mx-1'>🚽 4 bathrooms</span>
                  <span className='mx-1'>📐 1,000sqm</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
