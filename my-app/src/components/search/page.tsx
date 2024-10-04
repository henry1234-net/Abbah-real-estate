'use client'
import React from 'react';
import Search from '../svg/search';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

export default function SearchPage({placeholder}:{placeholder:string}) {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const {replace} = useRouter();
    function handleSearch(term:string){
        const params = new URLSearchParams(searchParams);
        if(term){
            params.set('query', term);
        } else {
            params.delete('query');
        }
        replace(`${pathname}?${params.toString()}`)
    }
  return (
    <div className='relative flex flex-1 flex-shrink-0'>
        <label htmlFor="search" className='sr-only'>Search for your New Home</label>
        <input type="text"
        className='block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm'
        placeholder={placeholder} 
        onChange={(e)=>{
            handleSearch(e.target.value)
        }}
        defaultValue={searchParams.get('query')?.toString()}
        />
        <Search className="absolute left-3 top-1/2 -translate-y-1/2" width="18" height="18" />
    </div>
  )
}
