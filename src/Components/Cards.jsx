
import React from 'react'

const Cards = ({ title, image, tags }) => {
  return (
    <div className=" border-[#737373] p-4 w-full max-w-sm font-poppins border-[1.07px] flex flex-col gap-3 justify-center items-start md:pl-8 md:mx-auto md:rounded-[9.55px] md:border-[0.95px] ">
      <img src={image} alt={title} className="rounded-[10.67px] mt-[32px]  h-[213px] w-[320px] object-cover" />
      
      <h3 className="text-white font-bold text-[20px] xl:text[24px]">{title}</h3>

      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="text-[#784DC7] bg-[#E9DFFC] text-[14px] px-[8.53px] py-[4.27px]  rounded-[12.8px]"
          >
            {tag}
          </span>
        ))}
      </div>

      <button className="bg-[#292929] text-white w-full py-[12.8px] px-[25.6p]">
        <p className='text-[16px]'>View Product Detail</p>
      </button>
    </div>
  )
}

export default Cards
