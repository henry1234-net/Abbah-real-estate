"use client";
import React from 'react';
import ProSvg from '@/components/svg/profile';
import Search from '@/components/svg/search';
import HomeIcon from '@/components/svg/home';
import MessageIcon from '@/components/svg/message';
import AddIcon from '@/components/svg/add';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import clsx from 'clsx';
import Image from 'next/image';

const Navigation = () => {
  const pathname = usePathname();
  const [activePath, setActivePath] = useState(pathname);

  useEffect(() => {
    setActivePath(pathname);
  }, [pathname]);

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
        <div className="flex flex-row items-center justify-between">
          <Link className={clsx('p-3 mx-2 md:hidden flex svg-container hover:bg-bakson-main-green/10 rounded-full', {
            'svg-hold': activePath === "/"
          })} 
          href="../">
            <HomeIcon className="fill-blue" width="24" height="24" />
          </Link>
          <Link className={clsx('p-3 mx-2 md:hidden flex svg-container hover:bg-bakson-main-green/10 rounded-full', {
            'svg-hold': activePath === "/message"
          })} 
          href="../message">
            <MessageIcon className="fill-blue" width="24" height="24" />
          </Link>
          <Link className={clsx('mx-2 md:hidden flex svg-container hover:bg-bakson-main-green/10 rounded-full', {
            'svg-hold': activePath === "/sell"
          })} 
          href="../sell">
            <AddIcon className="fill-blue" width="35" height="35" />
          </Link>

          <div className='flex flex-row items-center justify-center'><input type="search" name="searchFor" id="SearchId" className='focus:border-none border border-bakson-main-green hidden md:flex' placeholder='4 bedroom duplex for sale in jabi'/>
            <div className={clsx('p-3 mx-2 svg-container hover:bg-bakson-main-green/10 w-fit rounded-full', {
                'svg-hold': activePath === "/search"
              })} >
              <Link href="../search">
                <Search className="fill-blue" width="24" height="24" />
              </Link>
            </div>
          </div>
          
          <Link className={clsx('p-3 mx-2 svg-container w-fit rounded-full', {
            'svg-hold': activePath === "/profile"
          })} 
          href="../profile">
            {/* <ProSvg className="fill-blue" width="22" height="22" /> */}
            <Image
            src="/sunJinWoo.png"
            alt='profilePic'
            id='user-profile'
            width={25}
            height={25}
            className='rounded-full outline-2 outline-bakson-main-green'
            />
          </Link>
        </div>
      </nav>       
    </div>
  );
}

export default Navigation;