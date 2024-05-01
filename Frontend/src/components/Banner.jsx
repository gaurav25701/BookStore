import React from 'react';
import banner from "../../public/Banner.png";


const Banner = () => {
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-20  dark:bg-transparent'>
        <div className='w-full md:w-1/2 mt-12 md:mt-32 relative pt-0 !mt-0'>
          <div className='z-10 relative space-y-12 text-white'>
            <h1 className='text-4xl font-bold text-black dark:text-white '>
              Discover worlds between the <span className='text-pink-700'>pages</span>, where{' '}
              <span className='text-pink-700'>stories</span> come alive.
            </h1>
            <p className='text-xl'>
              Welcome to our bookstore, where every shelf holds treasures waiting to be discovered. Immerse yourself in
              the magic of words and explore endless possibilities.
            </p>
            <input type="text" placeholder="Enter your Email to login" className="input input-bordered w-full max-w-xs" />
          </div>
          <button className='btn mt-4 btn-secondary'>Login</button>

        </div>
        <div className='w-full md:w-1/2'>
          <img
            src={banner}
            className='order-1 w-full  h-auto filter '  
            alt="Banner"
          />
        </div>
      </div>
    </>
  );
};

export default Banner;