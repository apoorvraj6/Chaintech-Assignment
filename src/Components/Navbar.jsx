import React, { useState } from 'react'
import { IoIosMenu } from "react-icons/io";
import logo from "../assets/logo.png"

const Navbar = () => {
    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <nav className='text-white font-poppins flex justify-between items-center pb-[30px] px-[22px] relative '>
            <div className='flex items-center gap-1'>
                <img src={logo} alt="Logo" className='w-[26.623666763305664px] h-[26.623666763305664px]' />
                <p className="text-[20px] font-bold">Web</p>
            </div>

            <div className='hidden md:flex items-center justify-between w-[300px] xl:w-[347px]'>
                <p className='font-normal text-[16px] tracking-[-0.05] xl:text-[18px]'>Home</p>
                <p className='font-normal text-[16px] tracking-[-0.05] xl:text-[18px]'>Portfolio</p>
                <p className='font-normal text-[16px] tracking-[-0.05] xl:text-[18px]'>Skills</p>
                <p className='font-normal text-[16px] tracking-[-0.05] xl:text-[18px]'>About Me</p>
            </div>

            <button className='hidden md:block min-w-[141px] min-h-[40px] py-[24px] px[12px] rounded-[4px] bg-[#925FF0] font-regular text-[16px]'>Contact Me</button>

            
            <div className='md:hidden relative'>
                <IoIosMenu
                    className='w-[40px] h-[40px] cursor-pointer'
                    onClick={() => setShowDropdown(prev => !prev)}
                />

                {showDropdown && (
                    <div className='absolute right-0 mt-2 w-40 bg-black text-white rounded shadow-lg z-50 bg-opacity-90'>
                        <ul className='flex flex-col'>
                            <li className='px-4 py-2 hover:bg-black cursor-pointer'>Home</li>
                            <li className='px-4 py-2 hover:bg-black cursor-pointer'>Portfolio</li>
                            <li className='px-4 py-2 hover:bg-black cursor-pointer'>Skills</li>
                            <li className='px-4 py-2 hover:bg-black cursor-pointer'>About Me</li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar
