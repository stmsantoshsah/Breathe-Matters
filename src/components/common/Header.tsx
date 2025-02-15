import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../../assets/logo.svg";

function Header() {
  return (
    <header className='absolute top-[20px] w-full z-10'>
      <div className="container">
        <nav className='flex justify-between items-center py-[14px]'>
          <Link to="/"><img src={Logo} alt="Logo" /></Link>
          <button className='bg-primary text-white min-w-[121px] h-[43px] rouned-[8px] text-[16px]'>Book Now</button>
        </nav>
      </div>
    </header>
  )
}

export default Header
