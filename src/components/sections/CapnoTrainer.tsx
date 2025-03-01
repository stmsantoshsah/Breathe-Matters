import React from 'react'
import RightIcon from "../../assets/vector.svg"
const CapnoTrainerData = {
    title: (<>
        <span className='!font-[40px]'>What Is the</span> <br />CapnoTrainer® GO?
    </>),
    description: (<>The CapnoTrainer® GO isn’t just a tool—it’s your personal gateway to a healthier, more aligned you.Using advanced<a href='/' className='text-primary' target='_blank'> capnography technology</a>, it provides real-time insights into your breathing behavior by measuring CO2 levels and visualizing your breathing patterns.Paired with a guided learning framework, it empowers you to:</>),
    points: [
        {
            icons: RightIcon,
            text: "Identify and correct dysfunctional breathing habits."
        },
        {
            icons: RightIcon,
            text: "Understand the triggers and motivations behind your habits."
        },
        {
            icons: RightIcon,
            text: "Optimize your respiration for health, focus, and performance."
        }
    ]
}
const CapnoTrainer: React.FC = () => {
    return (
        <section className='capnotrainer_section'>
            <div className="container">
                <div className='flex justify-between md:flex-nowrap flex-wrap gap-5'>
                    <div className='xl:max-w-[540px] lg:max-w-[400px] md:max-w-[350px]'>
                        <h2 className='text-primary font-bold sm:!font-[50px] md:!font-[40px] !font-[30px] glining relative'>{CapnoTrainerData.title}</h2>
                        <p className=''>{CapnoTrainerData.description}</p>
                    </div>
                    <div className='md:!mt-0 !mt-6 capnotrainer_right relative ' >
                        {CapnoTrainerData.points.map((item, i) => (
                            <div key={i} className='bg-[#E6F2F2] rounded-[8px] !p-[10px] !mb-[22px] w-auto flex gap-2'>
                                <img src={item.icons} alt="" />
                                <p className='text-primary'>{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CapnoTrainer
