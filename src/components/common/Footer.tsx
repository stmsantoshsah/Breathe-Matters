import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../../assets/logo.svg"
import Instagram from "../../assets/instagram.svg"
import Facebook from "../../assets/facebook.svg"
import Twitter from "../../assets/twitter.svg"
import Discord from "../../assets/discord.svg"
const footerData = {
  logoImage: Logo,
  description: "Join us on a journey towards a healthier, balanced life – where each inhale and exhale contributes to your overall sense of wellness.",
  menuItems: [
    { name: "Phone", path: "/phone" },
    { name: "Email", path: "/" },
    { name: "Location", path: "/" }
  ],
  socilIcons: [
    { icon: Instagram, path: "https://instagram.com" },
    { icon: Facebook, path: "https://facebook.com" },
    { icon: Twitter, path: "https://twitter.com" },
    { icon: Discord, path: "https://discord.com" }
  ]

}
function Footer() {
  return (
    <footer className='lg:!mt-[120px] md:!mt-[100px] !mt-[50px]'>
      <div className="container">
        <div className='flex justify-between items-center md:flex-nowrap flex-wrap gap-5'>
          <div className='max-w-[386px]'>
            <Link to="/"><img src={footerData.logoImage} alt="footer logo" /></Link>
            <p>{footerData.description}</p>
          </div>
          <div>
            <h2 className='text-[24px]'>Contact</h2>
            <ul>
              {footerData.menuItems.map((item, i) => (
                <li key={i}><Link to={item.path}>{item.name}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h2  className='text-[24px]'>Stay on touch</h2>
            <ul className='flex gap-5'>
              {footerData.socilIcons.map((item, i) => (
                <li key={i}><a href={item.path} target='_blank' rel='noopener noreferrer'><img src={item.icon} alt="Social Icon" /></a></li>
              ))}
            </ul>
          </div>
        </div>
        <div className='!mt-[80px] text-center'>
          <p>@2024 BreatheMatters all rights reserved</p>
        </div>
      </div>
    </footer >
  )
}

export default Footer
