import React from 'react';
import Image from '../assets/img/house-banner.png'
import Search from '../components/Search'
const Banner = () => {
  return (
  <section className='h-full max-h-[640px] mb-8 xl:mb-24 '>
    <div className='flex flex-col lg:flex-row'>
      <div className='lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:item-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0'>
        <h1 className='text-4xl lg:text-[58px] font-semibold leading-none mb-6 '><span className='text-violet-700'>Rent</span>Your dream house with us.</h1>
        <p className='max-w-[700px] mb-8'>A property aggregator speaks for itself. It's a real estate website that collects property ads from different websites and displays them on one. Real Estate Aggregators are one of the most convenient ways to find a property to buy or rent because it allow you to compare the price, location, size, and condition, all one place. 
        </p>
      </div>
      <div className='hidden flex-1 lg:flex justify-end items-end'>
        <img src={Image}></img>
      </div>
    </div>
    <Search/>
  </section>
  )
};

export default Banner; 