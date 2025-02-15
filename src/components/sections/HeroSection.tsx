import React from 'react'
interface HeroSectionProps {
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
}
const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle, description, imageSrc }) => {
  return (
    <section className='hero_section !pt-[100px] relative'>
      <div className="container">
        <div className='flex'>
          <div>
            <h1 className='font-spectral text-white'>{title}</h1>
            <h2 className='text-white !mt-9'>{subtitle}</h2>
            <p className='text-white sm:max-w-[60%] !mt-4'>{description}</p>
          </div>
          <div className='absolute right-0 bottom-0 hidden sm:block'>
            <img src={imageSrc} alt="banneriMG" className='xl:max-w-[600px] lg:max-w-[400px] md:max-w-[300px] max-w-[200px] ' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
