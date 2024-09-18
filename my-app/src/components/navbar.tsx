import React from 'react'

export default function Navigation(){
  return (
    <div>
      <nav className='flex flex-row justify-around items-center w-screen h-14 bg-white shadow-md text-lg text-abbah-main-green font-medium rounded-lg'>
        <div className='mr-10 hover:cursor-pointer'>Abbah Homes</div>
        <ul className='md:flex flex-row justify-around w-[40%] hidden'>
          <li className='group'><a href="#" className=''>Home</a></li>
        <div className='relative'>
            <li className='dropholder'>
                <a href="#" className='dropdown'>Properties</a>
                <div className='absolute w-full p-1 bg-abbah-milk text-abbah-main-green rounded-sm mt-1 drop'>
                    <ul className='list-none p-0 m-0'>
                        <li className='w-full'>
                            <a href="#" className='block w-full text-center p-1'>Buy</a>
                        </li>
                        <li className='w-full'>
                            <a href="#" className='block w-full text-center p-1'>Sell</a>
                        </li>
                    </ul>
                </div>
            </li>
        </div>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <div className='ml-10'>user profile</div>
      </nav>       
    </div>
  )
}