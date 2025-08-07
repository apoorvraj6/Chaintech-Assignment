import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const SkillCard = ({ percentage, title, description }) => {
    return (

        <div className=" text-white border-[#737373] font-poppins rounded-[10px] border-[1px] p-6 text-center flex flex-col items-center  md:border-[0.82px] md:rounded-[8.22px] md:flex-row gap-4 md:pt-[32.87px] md:pr-[41.09px] md:pb-[49.31px] md:pl-[32.87px] xl:justify-start">
            <div className="w-[164px] h-[164px] mb-4 rounded-[90px]  md:min-h-[180.78704833984375px] md:min-w-[180.78704833984375px] xl:min-w-[220px] xl:min-h-[220px] ">

                <CircularProgressbar
                    value={Math.floor(percentage / 10) * 10}
                    text={`${percentage}%`}
                    strokeWidth={15}
                    styles={buildStyles({
                        textColor: '#FFFFFF',
                        textSize: '22px',
                        pathColor: 'url(#gradient)',  
                        trailColor: '#000000',
                        rotation: '0.75'
                    })}
                    className='text-[36px] font-bold md:font-medium'
                />
                <svg width={0} height={0}>
                    <defs>
                        <linearGradient id="gradient" x1="1" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#FA709A" />
                            <stop offset="100%" stopColor="#FEE140" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            <div className='flex flex-col md:justify-start md:items-start gap-2 ' >
            <h3 className="font-bold text-[22px] md:text-[20px] xl:text-[36px]">{title}</h3>
            <p className="text-[16px]  leading-[1.2] text-center md:text-left md:text-[16px] xl:text-[18px]">{description}</p>
            </div>
        </div>
    )
}

export default SkillCard
