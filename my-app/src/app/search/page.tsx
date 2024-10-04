'use client'
import React from 'react'
import SearchPage from '@/components/search/page'
import Table from '@/components/test/page'

const search = (
  {searchParams}:{
    searchParams?:{
      query?: string;
      page?: string;
    }
  }
) => {
  const query = searchParams?.query || '';
  return (
    <div className='px-3 md:pt-6'>
      <div>
      <SearchPage placeholder='2 bedroom apartment for rent'/>  
      <div className="my-5 border-b border-b-gray-200 w-fit">search for your new home</div>
      </div>
      <Table query={query}/>
    </div>
  )
}

export default search