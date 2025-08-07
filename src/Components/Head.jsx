import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { IoLogoFigma } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { PiMediumLogoFill } from "react-icons/pi";
import footimg from '../assets/footimg.jpg'
import arrowDown from '../assets/arrowDown.png'


const Head = () => {
    return (
        <header className='flex justify-center items-center gap-10 '>
        <div className='flex flex-col items-center justify-center font-poppins md:h-[547px] h-[333px] w-[663px] md:w-[663px] xl:h-[668px] xl:w-[956px]'>
            <div className='flex flex-col justify-center items-center '>
                <h1 className='text-white  font-extrabold text-[78.79px] min-w-[373px] leading-[0.9] tracking-[-0.03em] md:font-extrabold md:text-[136px] xl:text-[188px]'>PRODUCT</h1>
                <h1 className='text-white font-extrabold text-[78.79px] min-w-[373px] leading-[0.9] tracking-[-0.03em] md:font-extrabold md:text-[136px] xl:text-[188px]'>DESIGNER</h1>
                <p className='text-transparent bg-clip-text bg-gradient-to-r from-[#FA709A] to-[#FEE140]  min-w-[373px] text-[44.77px] font-bold leading-[0.9] tracking-[-0.03em] text-center pt-2 md:text-[79px] xl:text-[109px]'>CRISTIAN MUNOZ<br/></p>
            </div>


            <div className='pt-10 xl:h-[144px] xl:w-[875px] xl:flex xl:flex-col xl:items-center'>
            <div className='flex min-w-[304.16px] min-h-[30.13px] pt-[-5.79px] justify-evenly  items-center md:min-w-[525px] md:min-h-[52px] xl:h-[52px] xl:w-[525px]'>
                <FaInstagram className='text-white min-h-[30.13px] min-w-[30.13px] border-white border-[0.58px] rounded-[5.79px] p-[3.48px] md:min-h-[52px] md:min-w-[52px] md:border-[1px] md:rounded-[10px]  ' />
                <IoLogoFigma className='text-white min-h-[30.13px] min-w-[30.13px] border-white border-[0.58px] rounded-[5.79px] p-[3.48px] md:min-h-[52px] md:min-w-[52px] md:border-[1px] md:rounded-[10px] ' />
                <FaLinkedin className='text-white min-h-[30.13px] min-w-[30.13px] border-white border-[0.58px] rounded-[5.79px] p-[3.48px] md:min-h-[52px] md:min-w-[52px] md:border-[1px] md:rounded-[10px] ' />
                <FaTwitter className='text-white min-h-[30.13px] min-w-[30.13px] border-white border-[0.58px] rounded-[5.79px] p-[3.48px] md:min-h-[52px] md:min-w-[52px] md:border-[1px] md:rounded-[10px] ' />
                <FaTelegram className='text-white min-h-[30.13px] min-w-[30.13px] border-white border-[0.58px] rounded-[5.79px] p-[3.48px] md:min-h-[52px] md:min-w-[52px] md:border-[1px] md:rounded-[10px] ' />
                <PiMediumLogoFill className='text-white min-h-[30.13px] min-w-[30.13px] border-white border-[0.58px] rounded-[5.79px] p-[3.48px] md:min-h-[52px] md:min-w-[52px] md:border-[1px] md:rounded-[10px] ' />
            </div>

            <div className='bg-[#292929] min-h-[38px] min-w-[345px] flex items-center justify-center mt-[30px] md:min-w-[594px] md:min-h-[61px] md:py-[16px] md:pl-[32px] md:pr-[24px] xl:h-[52px] xl:w-[875px] xl:gap-3 md:gap-2 gap-1 '>
                <button className='text-white text-[14px] md:font-normal md:text-[18px] tracking-[-0.05] text-center xl:text-[20px]'>Download Cirriculam Vitae</button>
                <img src={arrowDown} alt="Arrow_Down" className='h-[11.586861610412598px] w-[11.586861610412598]px xl:w-[20px] xl:h-[20px]'/>
            </div>

            </div>
        </div>

        <div className='hidden xl:block '>
            <img src={footimg} alt="Image" className='h-[655px] w-[561px] rounded-[10px] hidden xl:block' />
        </div>
        </header>
    )
}

export default Head
