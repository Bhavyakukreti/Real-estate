import React, { useContext, useState } from 'react';
import {RiHome5Line,RiArrowDownSLine,RiArrowUpSLine} from 'react-icons/ri'
import {Menu} from '@headlessui/react'
import {HouseContext} from "./HouseContext"
const PropertyDropdown = () => {
  const {property,setproperty,properties}=useContext(HouseContext)
  const [isopen,setisopen]=useState(false)
  return <Menu as='div' className='dropdown relative '>
    <Menu.Button onClick={()=>setisopen(!isopen)} className='dropdown-btn w-full text-left '>
      <RiHome5Line className='dropdown-icon-primary'/>
      <div>
        <div className='text-[15px] font-medium leading-tight'>{property}</div>
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
      {properties.map((property,index)=>{
        return(
          <Menu.Item onClick={()=>setproperty(property)} className='cursor-pointer hover:text-violet-700 transition' as='li' key={index}>{property}</Menu.Item>
        )
      })}
    </Menu.Items>
  </Menu>;
};

export default PropertyDropdown; 