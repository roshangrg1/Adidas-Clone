import React from 'react'

function GreenBaner() {
  return (
    <div className="bg-[#5c9876] flex justify-center py-[100px]">
        <div className="sale">
            <p className="text-center text-white">End Of season sale | ends 1.3</p>
            <h1 className="font-bold text-[50px] text-white">20% Off On Selected Male Style</h1>
            <p className="text-center text-white">Use code cheers to checkout extra discount.</p>
            <div className="btn flex justify-center">
            <button className=' px-[20px] py-[10px] bg-white text-black mt-[20px] rounded-full'>Shop</button>
            </div>
        </div>
    </div>
  )
}

export default GreenBaner