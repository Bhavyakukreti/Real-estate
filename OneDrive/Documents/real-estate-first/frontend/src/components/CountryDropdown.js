import React, { useContext, useState } from 'react';
import {RiMapPinLine,RiArrowDownSLine,RiArrowUpSLine} from 'react-icons/ri'
import {Menu} from '@headlessui/react'
import {HouseContext} from "./HouseContext"
const CountryDropdown = () => {
  const {country,setcountry,countries}=useContext(HouseContext)
  const [isopen,setisopen]=useState(false)
  return <Menu as='div' className='dropdown relative '>
    <Menu.Button onClick={()=>setisopen(!isopen)} className='dropdown-btn w-full text-left '>
      <RiMapPinLine className='dropdown-icon-primary'/>
      <div>
        <div className='text-[15px] font-medium leading-tight'>{country}</div>
        <div className='text-[13px] '>Select your place</div>
        </div>
        {
          isopen? (
            <RiArrowUpSLine className='dropdown-icon-secondary'/>
          ) : (
            <RiArrowDownSLine className='dropdown-icon-secondary'/>
          )
        }
      
    </Menu.Button>


    <Menu.Items className='dropdown-menu'>
      {countries.map((country,index)=>{
        return(
          <Menu.Item onClick={()=>setcountry(country)} className='cursor-pointer hover:text-violet-700 transition' as='li' key={index}>{country}</Menu.Item>
        )
      })}
    </Menu.Items>
  </Menu>;
};

export default CountryDropdown;