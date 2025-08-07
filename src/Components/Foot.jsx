import React from 'react'
import footbg from '../assets/footbg.jpg'
import footimg from '../assets/footimg.jpg'
import frame36 from '../assets/Frame36.png'
import frame37 from '../assets/Frame37.png'
import logo from '../assets/logo.png'
import shield from '../assets/shield.png'

const Foot = () => {
    return (
        <footer className='font-poppins mt-16 flex flex-col justify-center items-center text-white  '>
            <div className=" min-h-[427px] w-screen px-6 py-20 bg-left flex flex-col items-center justify-center gap-8 md:h-[358px] xl:h-[636px] xl:bg-no-repeat xl:bg-cover xl:w-full "
                style={{
                    backgroundImage: `url(${footbg})`
                }}>
                <h1 className='h-[27px] w-[248px] font-semibold text-[26px] text-center leading-[1.05] md:text-[36px] md:w-[344px] md:h-[38px] xl:text-[48px] xl:w-[458px] xl:h-[50px]'>Kaleb Lechtenberg</h1>
                <p className='w-[349px] h-[114px] font-normal text-[16px] leading-[1.20] text-center md:leading-[1.45]  md:w-[660px] md:h-[69px] xl:text-[38px] xl:w-[1094px] xl:h-[230px]'>
                    "Working with this freelancer has been great. His attention to detail is unparalleled and
                    finished all work ahead of schedule. Will gladly send more work and I do not hesitate to
                    recommend him to you on your project also."
                </p>
                <img src={shield} alt='shield' className='h-[45px] w-[39px] md:min-w-[72px] md:min-h-[86px]' />
            </div>


            <div className='relative mt-20 flex items-start min-w-[383px] min-h-[113px] rounded-[6.93px] bg-[#A87FF3] text-white p-[10px] gap-3 md:min-w-[712px] md:min-h-[154.5959014892578px] md:rounded-[12.88px] md:mt-36 xl:w-full'>

                
                <div className='absolute inset-0 overflow-hidden z-0 pointer-events-none'>
                    <img
                        src={frame36}
                        alt="design"
                        className='absolute left-0 bottom-0 h-[46px] w-[55px] md:h-[107.35826110839844px] md:w-[128.8299102783203px]'
                    />
                    <img
                        src={frame37}
                        alt="design"
                        className='absolute right-0 top-0 h-[46px] w-[55px] md:h-[85.02774047851562px] md:w-[102.20506286621094px] xl:w-[150px] xl:h-[125px] xl:-right-6'
                    />
                </div>

               
                <div className='relative z-10 flex gap-3 items-start w-full'>

                   
                    <div className="relative w-[88px] h-[103px] md:min-w-[164.0421142578125px] md:min-h-[191.52867126464844px] flex-shrink-0 rounded-[8.59px]">
                        <img
                            src={footimg}
                            alt="Footer Image"
                            className='w-full h-full object-cover rounded-[4.6px] absolute -top-10 left-0 md:-top-20 md:left-6'
                        />
                    </div>

                   
                    <p className='font-normal text-[14px] leading-[1.2] md:text-[16px] md:pl-16 md:my-auto pr-2 md:h-[57px] md:min-w-[410.5379943847656px]'>
                        Thanks for visiting my website. <br />
                        If you have any questions, you can write me on any of my social networks — I am sure I will answer you.
                    </p>

                </div>
            </div>





            <div className='mt-20 font-poppins md:flex md:justify-between  md:w-screen md:gap-20 items-center md:border-b md:border-[#E6E6E6] md:px-10 xl:px-48 xl:w-full' >
                <div className=' flex justify-center items-center gap-2  '>
                    <img src={logo} alt="Logo" className='min-w-[44.92743682861328px] min-h-[44.99911880493164px] md:h-[48.05024719238281px] md:w-[48.05024719238281px] xl:w-[59.90325164794922px] xl:h-[59.998043060302734px]' />
                    <p className='text-white text-[33.75px] font-bold md:text-[36.1px] xl:text-[45px]'>Web</p>

                </div>

                <div className='flex flex-row items-center mt-5 border-b-[1px] border-[#E6E6E6] pb-8 w-screen  justify-evenly md:justify-between md:w-[313px] md:border-none xl:gap-2'>
                    <p className='font-normal text-[16px] xl:text-[20px]'>Home</p>
                    <p className='font-normal text-[16px] xl:text-[20px]'>Portfolio</p>
                    <p className='font-normal text-[16px] xl:text-[20px]'>Skills</p>
                    <p className='font-normal text-[16px] xl:text-[20px]'>About Me</p>

                </div>

            </div>

            



        </footer>
    )
}

export default Foot
