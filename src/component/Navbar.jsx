import React from 'react'

function Navbar() {
  return (
    <div className="flex items-center justify-between  bg-white">
        <div className="left_logo">
            <img className="w-[60.8px]" src="https://cdn-icons-png.flaticon.com/128/732/732229.png" alt="" />
        </div>
        <div className="mid flex gap-[20px]">
            <a href="">New and Features</a>
            <a href="">Men</a>
            <a href="">Women</a>
            <a href="">kid</a>
            <a href="">Sale</a>
        </div>
        <div className="right flex">
            <input type="text" placeholder='Search' />
            <div className="icon">
            <i class="fa-solid fa-heart"></i>
            <i class="fa-regular fa-bag-shopping"></i>
            </div>
        </div>
    </div>
  )
}

export default Navbar