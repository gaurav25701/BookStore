import React from 'react';
import { Link } from "react-router-dom";
import list from "../../public/list.json";
import Cards from "./Cards";

const Course = () => {
  return (
    <>

    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
      <div className='mt-28 items-center justify-center text-center '>
        <h1 className='text-2xl md:text-4xl'>We're delighted to have you <span className='text-pink-600'>Here! :)</span></h1>

        <p className='mt-12'>Books are timeless vessels of knowledge, offering refuge in their pages and 
        guidance in their words. 
        They capture the echoes of history, 
        the whispers of wisdom, and the dreams of humanity. 
        With every turn of the page, they invite us 
        on adventures, challenge our perspectives, 
        and ignite the flames of curiosity within our souls.
        </p>
        <Link to="/">
        <button className=' mt-6 bg-pink-500 rounded-md hover:bg-pink-700 duration-300 text-white px-4 py-2'>
          Back
        </button>
        </Link>
      
      </div>
      <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
        {
          list.map((item) => (
           <Cards key={item.id} item={item} /> 
          ))
        }
      </div>
    </div>

    </>
  );
};

export default Course;
