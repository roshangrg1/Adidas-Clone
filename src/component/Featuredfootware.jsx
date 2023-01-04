import React from 'react'

function Featuredfootware() {
  return (
    <div className="mt-[100px] ">
        <h4 className="ml-[50px]  text-[20px] pb-[20px]">Featured Footware</h4>
        <img className=" px-[5%] mx-auto" src="https://static.nike.com/a/images/f_auto/dpr_0.9,cs_srgb/w_1403,c_limit/8bc23e14-eb80-4cdc-b4bd-79ba4fe24738/nike-just-do-it.jpg" alt="" />
        <div className="contents">
            <h1 className="text-[80px] text-center font-bold ">Classic For A Reason</h1>
            <p className="text-center">Drunk Af1s, air max and more</p>
            <div className="btns flex justify-center mt-[20px]">
                <button className="bg-black text-white py-[8px] px-[20px] rounded-full">Shop man</button>
                <button className="bg-black text-white py-[8px] px-[20px] rounded-full mx-[20px]">Shop women</button>
                <button className =" bg-black text-white py-[8px] px-[20px] rounded-full">Shop kids</button>
            </div>
        </div>
    </div>
  )
}

export default Featuredfootware