import React from 'react'
import { FaGreaterThan } from "react-icons/fa";
import star from '../assets/star.png'

const Body = () => {
  return (
    <div className='flex flex-col font-poppins border-[#646464] justify-between items-center  px-4 min-h-[599px] pt-10 pb-10 border-[1px] mt-10 rounded-[29px] md:flex-row md:min-h-[248.10610961914062px] md:min-w-[711.3902587890625px]  md:border-[0.87px] md:rounded-[25.1px] md:justify-around md:items-center md:py-[70.97px] xl:h-[373px]  xl:mx-auto ' >
      
      <div className='text-[#C8FEC7] flex flex-col items-center justify-center leading-[0.9] md:min-h-[106.17420959472656px] md:min-w-[162px] xl:items-start'>
        <p className='font-bold text-[50px] md:text-[55.39px] xl:text-[120px]'>90%</p>
        <p className='font-semibold text-[18px] pt-2 md:text-[19.04px] xl:text-[34px] '>Job Success</p>
        <p className='font-semibold text-[18px] md:text-[19.04px] xl:text-[34px] '>Score on Upwork</p>
      </div>

      <img src={star} alt="Star" className='hidden xl:block'/>

      <div className='text-[#C8FEC7] flex flex-col items-center justify-center leading-[0.9] xl:items-start'>
        <div className='flex justify-center items-center '>
            <FaGreaterThan className='font-bold text-[30px] xl:text-[80px]'/>
            <p className='font-bold text-[50px] md:text-[55.39px] xl:text-[120px] '>25.000</p>
        </div>
        <p className='font-semibold text-[18px] pt-2 md:text-[19.04px] xl:text-[34px]'>Duplicates on Figma</p>
        <p className='font-semibold text-[18px] md:text-[19.04px] xl:text-[34px]'>Community</p>
      </div>

      <img src={star} alt="Star" className='hidden xl:block h-[80px] w-[80px]'/>

      <div className='text-[#C8FEC7] flex flex-col items-center justify-center leading-[0.9] xl:items-start'>
        <div className='flex justify-center items-center '>
             <FaGreaterThan className='font-bold text-[30px] xl:text-[80px]'/>
             <p className='font-bold text-[50px] md:text-[55.39px] xl:text-[120px]'>2K</p>
        </div>
        <p className='font-semibold text-[18px] pt-2 md:text-[19.04px] xl:text-[34px] xl:text-left'>In Finished</p>
        <p className='font-semibold text-[18px] md:text-[19.04px] xl:text-[34px] xl:text-left'>Works</p>
      </div>

    </div>
  )
}

export default Body
