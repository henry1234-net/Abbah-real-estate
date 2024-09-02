import React from 'react'
import '@/app/globals.css'
import Navigation from '@/components/navbar'
import Image from 'next/image'

export default function LoginPage() {
  return (
    <div className='relative p-3 max-w-screen'>
        <Navigation />
        <div className='bg-abbah-milk/50 mt-5 mb-[2vw] p-3 rounded-lg flex md:flex-row flex-col justify-center items-center'>
          <div className="md:w-1/2 h-fit w-full block mx-auto my-5 text-left p-10">
            <h2 className='text-abbah-black-100 text-[40px] font-semibold'>Find your way <span className='text-abbah-main-green font-bold'>Home</span> with us</h2>
            <p className='text-xl mt-4'>Your journey to finding the perfect property starts here. Explore our listings to find your dream home or reach out to us for personalized assistance.</p>

            <div className='flex flex-row items-center justify-left w-full mt-10 text-lg text-abbah-milk'>
              <button className='bg-abbah-red p-2 rounded-md mr-6 hover:scale-[1.02]'>Explore Listings</button>
              <button className='bg-abbah-main-green p-2 rounded-md ml-6 hover:scale-[1.02]'>Contact Us</button>
            </div>

            <div className="flex flex-row items-center justify-between text-center mt-[30px] text-abbah-main-green text-xl font-semibold bg-abbah-main-green/10 backdrop-blur-sm border border-abbah-main-green py-2 px-4 rounded-md md:w-[90%] w-screen">
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
          <div className="md:w-1/2 w-full md:h-70vh mt-[100px]">
            <Image
            src='/HeroImg.png'
            alt='Hero Image'
            layout='fill'
            objectFit='contain'
            />
          </div>
        </div>
        <div className='w-full h-[80vh] bg-abbah-milk/50 mt-4 p-2 rounded-lg'>How are you</div>
    </div>
  )
}