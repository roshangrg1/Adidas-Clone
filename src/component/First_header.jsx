import React from 'react'

function First_header() {
  return (
    <div className="bg-[#f5f5f5] flex justify-between h-[40px] items-center">
        <div className="jordan_converse_logo flex flex-row gap-[20px]">
            <img className="w-[30px]" src="data:image/png;base64,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" alt="" />
            <img className="w-[30px]" src="https://png.pngitem.com/pimgs/s/485-4853948_converse-star-chevron-logo-png-download-transparent-converse.png" alt="" />
        </div>
        <div className="right flex gap-[20px]">
            <a className="text-[12px] font-bold" href="">Find a store</a>
            <p className="">|</p>
            <a className="text-[12px] font-bold" href="">Help</a>
            <p className="">|</p>
            <a className="text-[12px] font-bold" href="">Join</a>
            <p className="">|</p>
            <a className="text-[12px] font-bold" href="">Sign In</a>
            <p className="">|</p>
           
        </div>
    </div>
  )
}

export default First_header