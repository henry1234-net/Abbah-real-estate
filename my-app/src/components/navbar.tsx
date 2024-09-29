"use client";
import React from 'react';
import ProSvg from '@/components/svg/profile';
import Search from '@/components/svg/search';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const Navigation = () => {
  const pathname = usePathname();

  return (
    <div className="fixed md:top-0 bottom-0 left-0 z-10 w-full h-fit">
      <nav className='flex flex-row justify-around items-center w-full h-14 bg-bakson-milk md:bg-white shadow-md text-lg md:text-bakson-grey-500 font-medium md:rounded-b-lg md:rounded-t-none border border-t-bakson-main-green md:border-none rounded-t-lg'>
        <div className='mr-10 hover:cursor-pointer hidden md:block'>Bokta Homes</div>
        <ul className='md:flex flex-row justify-around w-[40%] hidden'>
          <li className='group'><Link href="/" className=''>Home</Link></li>
          <div className='relative'>
            <li className='dropholder'>
              <a href="#" className='dropdown'>Properties</a>
              <div className='absolute w-full p-1 bg-bakson-milk text-bakson-grey-500 rounded-sm mt-1 drop'>
                <ul className='list-none p-0 m-0'>
                  <li className='w-full'><Link href="../buy" className='block w-full text-center p-1'>Buy</Link></li>
                  <li className='w-full'><Link href="../sell" className='block w-full text-center p-1'>Sell</Link></li>
                  <li className='w-full'><Link href="../rent" className='block w-full text-center p-1'>Rent</Link></li>
                </ul>
              </div>
            </li>
          </div>
          <li><Link href="#">About Us</Link></li>
          <li><Link href="#">Services</Link></li>
          <li><Link href="#">Contact</Link></li>
        </ul>
        <div className="flex flex-row items-center justify-around">
          <Link className={clsx('p-3 mx-2 md:hidden flex svg-container hover:bg-bakson-milk rounded-full', {
            'bg-bakson-milk svg-hold': pathname === "/profile"
          })} 
          href="../profile">
            <ProSvg className="fill-blue" width="20" height="20" />
          </Link>
          <Link className={clsx('p-3 mx-2 md:hidden flex svg-container hover:bg-bakson-milk rounded-full', {
            'bg-bakson-milk svg-hold': pathname === "/profile"
          })} 
          href="../profile">
            <ProSvg className="fill-blue" width="20" height="20" />
          </Link>
          <Link className={clsx('p-3 mx-2 md:hidden flex svg-container hover:bg-bakson-milk rounded-full', {
            'bg-bakson-milk svg-hold': pathname === "/profile"
          })} 
          href="../profile">
            <ProSvg className="fill-blue" width="20" height="20" />
          </Link>

          <div className='flex flex-row items-center justify-center'><input type="search" name="searchFor" id="SearchId" className='focus:border-none border border-bakson-main-green hidden md:flex' placeholder='4 bedroom duplex for sale in jabi'/>
            <div className={clsx('p-3 mx-2 svg-container hover:bg-bakson-milk w-fit rounded-full', {
                'bg-bakson-milk svg-hold': pathname === "/noprofile"
              })} >
              <Link href="../noprofile">
                <Search className="fill-blue" width="20" height="20" />
              </Link>
            </div>
          </div>
          
          <Link className={clsx('p-3 mx-2 svg-container w-fit hover:bg-bakson-milk rounded-full', {
            'bg-bakson-milk svg-hold': pathname === "/profile"
          })} 
          href="../profile">
            <ProSvg className="fill-blue" width="20" height="20" />
          </Link>
        </div>
      </nav>       
    </div>
  );
}

export default Navigation;