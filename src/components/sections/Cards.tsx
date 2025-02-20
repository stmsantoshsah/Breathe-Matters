import React from 'react'

import image1 from "../../assets/real.png"
import image2 from "../../assets/monitor.png"
import image3 from "../../assets/real.png"

const cardData = [
    {
        image: image1,
        title: "See Your Breathing in Action",
        description: "Gain an immediate understanding of your breathing patterns. See how each breath impacts your health and performance with clear, dynamic visuals."
    },
    {
        image: image2,
        title: "Monitor Your Progress",
        description: "Track your breathing efficiency over time.By measuring your CO2 levels, the CapnoTrainer® GO provides real- time data to help you optimize your respiration."
    },
    {
        image: image3,
        title: "Receive Tailored Feedback",
        description: "Get personalized feedback to improve your breathing. Practical exercises help realign your breath for optimal benefits."
    }
]
const Cards = () => {
    return (
        <div className='card_wrapper flex lg:gap-[50px] md:gap-[30px] md:flex-nowrap flex-wrap '>
            {cardData.map((item, i) => (
                <div className='md:max-w-[33.33%] sm:md:max-w-[50%] md:max-w-[100%] w-full h-full bg-[#E6F2F2]' key={i} style={{ boxShadow: "0px 2px 3px 0px #0000001A" }} >
                    <div className='h-[220px]'>
                        <img src={item.image} alt="card image" className='w-auto' />
                    </div>
                    <div className='!p-[20px] md:!mt-[-20px] bg-[#E6F2F2] rounded-[8px] relative' style={{ boxShadow: "0px 2px 3px 0px #0000001A" }}>
                        <h3 className='font-nunita text-primary text-[20px] font-[700] '>{item.title}</h3>
                        <p>{item.description}</p>
                    </div>
                </div>
            ))}

        </div>
    )
}

export default Cards
