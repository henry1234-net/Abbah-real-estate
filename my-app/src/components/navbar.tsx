"use client"
import React,{useState, useEffect} from 'react'
import ProSvg from '@/components/svg/profile'

const Navigation = () =>{
  const [fillColor, setFillColor] = useState(() => {
    return typeof window !== 'undefined' ? localStorage.getItem('fillColor') || '#228b22' : '#228b22';
  });
  
  const [bgColor, setBgColor] = useState(() => {
    return typeof window !== 'undefined' ? localStorage.getItem('bgColor') || '' : '';
  });

  const handleClick = () => {
    const newColor = fillColor === '#228b22' ? 'white' : '#228b22';
    setFillColor(newColor);
    
    const newBgColor = bgColor ? '' : 'bg-[#34d334]/30 rounded-full p-2'; // Change as per your CSS
    setBgColor(newBgColor);
    
    // Save to localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('fillColor', newColor);
      localStorage.setItem('bgColor', newBgColor);
    }
  };

  useEffect(() => {
    // Ensure colors are set from localStorage when the component mounts
    if (typeof window !== 'undefined') {
      setFillColor(localStorage.getItem('fillColor') || '#228b22');
      setBgColor(localStorage.getItem('bgColor') || '');
    }
  }, []);

  return (
    <div>
      <nav className='flex flex-row justify-around items-center w-screen h-14 bg-bakson-milk md:bg-white shadow-md text-lg md:text-bakson-grey-500 font-medium md:rounded-lg border border-t-bakson-main-green rounded-t-lg'>
        <div className='mr-10 hover:cursor-pointer hidden md:block'>Bokta Homes</div>
        <ul className='md:flex flex-row justify-around w-[40%] hidden'>
          <li className='group'><a href="#" className=''>Home</a></li>
        <div className='relative'>
            <li className='dropholder'>
                <a href="#" className='dropdown'>Properties</a>
                <div className='absolute w-full p-1 bg-bakson-milk text-bakson-grey-500 rounded-sm mt-1 drop'>
                    <ul className='list-none p-0 m-0'>
                        <li className='w-full'>
                            <a href="../buy" className='block w-full text-center p-1'>Buy</a>
                        </li>
                        <li className='w-full'>
                            <a href="../sell" className='block w-full text-center p-1'>Sell</a>
                        </li>
                        <li className='w-full'>
                            <a href="../rent" className='block w-full text-center p-1'>Rent</a>
                        </li>
                    </ul>
                </div>
            </li>
        </div>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <div>
          <div>
            <h1 className='text-sm'>Home Page</h1>
            <a className={`p-4 ${bgColor}`} href="../profile" onClick={handleClick}>
              <ProSvg className="my-svg" width="20" height="20" fill={fillColor} />
            </a>
          </div>
          <div>
          <h1 className='text-sm'>Home Page</h1>
          <a className={`p-4 ${bgColor}`} href="../profile" onClick={handleClick}>
            <ProSvg className="my-svg" width="20" height="20" fill={fillColor} />
          </a>
        </div>
        <div>
          <h1 className='text-sm'>Home Page</h1>
          <a className={`p-4 ${bgColor}`} href="../profile" onClick={handleClick}>
            <ProSvg className="my-svg" width="20" height="20" fill={fillColor} />
          </a>
        </div>
        <div>
          <h1 className='text-sm'>Home Page</h1>
          <a className={`p-4 ${bgColor}`} href="../profile" onClick={handleClick}>
            <ProSvg className="my-svg" width="20" height="20" fill={fillColor} />
          </a>
        </div>
        <div>
          <h1 className='text-sm'>Home Page</h1>
          <a className={`p-4 ${bgColor}`} href="../profile" onClick={handleClick}>
            <ProSvg className="my-svg" width="20" height="20" fill={fillColor} />
          </a>
        </div>
        </div>
        
        
      </nav>       
    </div>
  )
}

export default Navigation;