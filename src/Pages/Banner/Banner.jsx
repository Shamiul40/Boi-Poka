import React from 'react';
import BannerImg from "../../../Assets/books.jpg"

const Banner = () => {
  return (
    <div className='flex justify-between items-center my-10 w-10/12 mx-auto bg-[#dfdfdf] p-8 rounded-2xl'>
      <div >
        <h1 className='text-7xl text-black'>Books to freshen up <br></br> your bookshelf</h1>
        <button className='btn btn-primary my-10 text-white'>View The List</button>
      </div>
      <div>
        <img className='rounded-2xl' src={BannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;