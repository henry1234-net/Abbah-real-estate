import React from 'react'
import '@/app/globals.css'
import Navigation from '@/components/navbar'
import Image from 'next/image'

export default function LoginPage() {
  return (
    <div className='relative p-3'>
        <Navigation />
        <div className='max-w-screen min-h-[82vh] bg-[#f5f5dc] mt-5 mb-[2vw] p-3 rounded-lg flex flex-row'>
          <div className="w-1/2 block my-5 text-left p-10 relative">
            <h2 className='text-abbah-black-100 text-[40px] font-semibold'>Find your way <span className='text-abbah-main-green font-bold'>Home</span> with us</h2>
            <p className='text-xl mt-4'>Your journey to finding the perfect property starts here. Explore our listings to find your dream home or reach out to us for personalized assistance.</p>

            <div className='flex flex-row items-center justify-left w-full mt-10 text-lg text-abbah-milk'>
              <button className='bg-abbah-red p-2 rounded-md mr-6 hover:scale-[1.02]'>Explore Listings</button>
              <button className='bg-abbah-main-green p-2 rounded-md ml-6 hover:scale-[1.02]'>Contact Us</button>
            </div>

            <div className="flex flex-row justify-between text-center mt-[30px] text-abbah-main-green text-xl font-semibold bg-abbah-main-green/10 backdrop-blur-sm border border-abbah-main-green absolute bottom-0 py-2 px-4 rounded-md w-[90%]">
              <div className="flex flex-col">
                <p>17k+</p>
                <p>Satisfied Customers</p>
              </div>
              <div className="flex flex-col justify-center">
                <p>30+</p>
                <p>Years of Experience</p>
              </div>
              <div className="flex flex-col justify-center">
                <p>50k+</p>
                <p>Agents</p>
              </div>
            </div>
          </div>
          <div className="w-1/2 h-70vh relative">
            <Image
            src='/HeroImg.png'
            alt='Hero Image'
            layout='fill'
            objectFit='contain'
            />
          </div>
        </div>
        <div className='w-full h-[80vh] bg-[#f5f5dc] mt-4 p-2 rounded-lg'>How are you</div>
    </div>
  )
}