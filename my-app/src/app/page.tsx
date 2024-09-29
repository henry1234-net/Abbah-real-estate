import React from 'react';
import '@/app/globals.css';
import Image from 'next/image';
import '@/app/scrollbar.css';
import Card from '@/components/card/card'

export default function LoginPage() {
  const allImage = ['/HeroImg.png', '/HeroImg.png', '/HeroImg.png', '/HeroImg.png', '/HeroImg.png', '/HeroImg.png'];
  const whatWeDo = [
    {
      icon: "/icons/comm.png",
      Title: "Communication",
      Detail: "We prioritize open and honest communication, ensuring you're informed and confident at every step of your real estate journey."
    },
    {
      icon: "/icons/shield.png",
      Title: "Reliability",
      Detail: "Count on us to be there when you need us. We pride ourselves on being dependable partners, delivering on our promises every time."
    },
    {
      icon: "/icons/qual.png",
      Title: "Quality First",
      Detail: "Our commitment to excellence means we focus on delivering top-notch service and results, making your satisfaction our ultimate goal."
    },
    {
      icon: "/icons/fam.png",
      Title: "Families",
      Detail: "We understand the importance of finding the perfect home for your family. We’re dedicated to creating a seamless experience tailored to your unique needs."
    }
  ];

  return (
    <div className='max-w-screen relative'>
      <div className='bg-bakson-main-green flex md:flex-row flex-col relative rounded-md z-0 p-3 w-full md:h-screen h-fit'>
        <div className="md:w-1/2 h-full md:mt-[4%] p-4 md:relative">
          <h2 className='text-bakson-milk md:text-[40px] text-[30px] md:text-left text-center font-normal'>
            Find your way <span className='text-bakson-milk font-bold'>Home</span> with us
          </h2>
          <p className='md:text-xl text-lg mt-4 text-justify text-bakson-milk'>
            Your journey to finding the perfect property starts here. Explore our listings to find your dream home or reach out to us for personalized assistance.
          </p>

          <div className='flex flex-row items-center mt-6 md:mt-10 md:text-lg text-base pb-2'>
            <a href="../buy">
              <button className='bg-bakson-milk/10 backdrop-blur-sm text-bakson-milk border hover:text-bakson-main-green hover:bg-bakson-milk/90 hover:border-bakson-main-green py-3 px-6 rounded-md mr-6 transition-all'>
              Explore Listings
              </button>
            </a>
            <a href="../contact">
              <button className='bg-bakson-milk/10 backdrop-blur-sm hover:backdrop-blur-lg text-bakson-milk hover:text-bakson-main-green hover:bg-bakson-milk/90 border hover:border-bakson-main-green border-bakson-milk py-3 px-6 rounded-md ml-6 transition-all'>
                Contact Us
              </button>
            </a>
          </div>

          <div className="w-full md:flex flex-row items-center justify-center hidden">
        <div className="flex md:flex-row flex-col items-center justify-around text-center mt-[30px] text-bakson-milk md:text-xl text-md font-bold border border-bakson-milk p-2 rounded-md w-full md:mt-[13%]">
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
        <div className="flex md:flex-row flex-col items-center justify-around text-center mt-[30px] text-bakson-main-green md:text-xl text-md font-bold bg-bakson-main-green/10 backdrop-blur-sm border border-bakson-main-green p-2 rounded-md w-full md:mt-[15%]">
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
      

      <div className='w-full h-fit flex flex-col bg-bakson-white mt-4 p-4 py-10 rounded-lg overflow-hidden'>
        <span className='text-[13px] text-bakson-light-green'>Best Choice</span>
        <span className="text-lg"> Popular Residences </span>

        <div className='flex flex-row overflow-x-scroll scrollbar-thin'>
          {allImage.map((image, index) => (
            <div key={index} className='bg-bakson-milk/20 rounded-md relative mx-2 my-3 hoverAnimate'>
              <div className='bg-bakson-milk/50 rounded-tr-md rounded-tl-md h-[180px] hAnimChild1 flex-shrink-0 relative'>
                <Image
                  src={image}
                  alt={`image ${index + 1}`}
                  layout='fill'
                  className='rounded-md'
                  objectFit='contain'
                />
              </div>
              <div className='flex flex-col text-sm p-4 hAnimChild2 rounded-br-md rounded-bl-md'>
                Bakson Estate, Kubwa, Abuja
                <span className='flex flex-row'><span className='text-bakson-main-green font-semibold'> ₦1,000,000</span>/year</span>
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

      <div className='bg-bakson-milk/50 block md:flex-row relative rounded-md z-0 mt-8 p-3 py-10 w-full'>
        <h2 className='text-bakson-black-100 md:text-[40px] text-[30px] text-center font-semibold mb-5'>
          What we do
        </h2>
        <div className='flex flex-col md:flex-row items-center justify-around text-center'>
          {whatWeDo.map((texts, index) =>(
            <Card key={index} className='md:mb-0 mb-4 border border-bakson-main-green'>
              <div className="block my-4 mx-auto w-fit bg-bakson-milk/50 rounded-full p-2">
                <Image 
                src={texts.icon}
                alt={`icon ${index}`}
                width={50}
                height={50}
                />
              </div>
              <h2 className='text-xl font-semibold my-4'>{texts.Title}</h2>
              <h3 className='text-sm mb-4'>{texts.Detail}</h3>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}