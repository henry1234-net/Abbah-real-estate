import React from 'react';
import '@/app/globals.css';
import Navigation from '@/components/navbar';
import Image from 'next/image';

export default function LoginPage() {
  return (
    <div className='p-3 max-w-screen'>
      <Navigation />
      <div className='bg-abbah-milk/50 flex md:flex-row flex-col relative'>
        <div className="md:w-1/2 h-fit text-left p-4">
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

          <div className="flex flex-row items-center justify-center text-center mt-[30px] text-abbah-main-green md:text-xl text-xs font-semibold bg-abbah-main-green/10 backdrop-blur-sm border border-abbah-main-green p-2 rounded-md md:w-[90%] w-full">
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
        <div className="md:w-1/2 h-fit relative order-first">
          <Image
            src='/HeroImg.png'
            alt='Hero Image'
            layout='responsive'
            width={700} // Replace with your image width
            height={500} // Replace with your image height
            objectFit='contain'
          />
        </div>
      </div>
      <div className='w-full h-[80vh] bg-abbah-milk/50 mt-4 p-2 rounded-lg'>
        How are you
      </div>
    </div>
  );
}

