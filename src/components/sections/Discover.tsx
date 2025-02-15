import React from 'react'
import WomenYoga from '../../assets/womanyoga.png'
import Headache from '../../assets/headache.png'
import LowBattery from '../../assets/low-battery.png'
import MusclePain from '../../assets/muscle-pain.png'

const discoverData = {
    title: "Discover the Hidden Power of Your Breath",
    description: "Your breathing isn’t just about oxygen in and carbon dioxide out—it’s a complex behavior shaped by triggers, habits, and physiology. When misaligned, these habits can:",
    image: WomenYoga,
    points: [
        {
            icon: Headache,
            title: "Compromise your health:",
            text: "Triggering anxiety, fatigue, and physical discomfort."
        },
        {
            icon: LowBattery,
            title: "Disrupt your performance:",
            text: "Causing focus deficits, memory issues, and suboptimal endurance."
        },
        {
            icon: MusclePain,
            title: "Exacerbate existing conditions:",
            text: "Like asthma, chronic pain, and even stress-related disorders."
        }
    ],
    conclusion: "  Millions of people suffer the consequences of poor breathing habits. But you don’t have to be one of them. With the CapnoTrainer® GO, you’ll unlock a scientifically-backed pathway to breathing mastery."
}
const Discover: React.FC = () => {
    return (
        <section className='discover_section lg:!mb-[150px] sm:!mb-[100px] !mb-[50px]'>
            <div className="container">
                <h2 className='text-center'>{discoverData.title}</h2>
                <div className='flex bg-[#E6F2F2] !mt-[10px] items-end lg:flex-nowrap flex-wrap'>
                    <div className='lg:max-w-[40%] w-full'>
                        <img src={discoverData.image} alt="WomenYoga" className='w-full' />
                    </div>
                    <div className='lg:max-w-[60%] w-full'>
                        <p className='!mb-[30px] !px-[37px] !pt-8'>{discoverData.description}</p>
                        {discoverData.points.map((item, i) => (
                            <div key={i} className='flex items-center gap-3 !mb-[25px] !px-[37px]'>
                                <div className='w-[44px] h-[44px]'>
                                    <img src={item.icon} alt="Headache" />
                                </div>
                                <div>
                                    <h4>{item.title}</h4>
                                    <p>{item.text}</p>
                                </div>
                            </div>
                        ))}
                        <div className='bg-primary !px-[37px] !py-[20px] text-white'>{discoverData.conclusion}</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Discover
