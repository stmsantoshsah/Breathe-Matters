import React from 'react'
import Image1 from "../../../public/assets/eliminate.png"
import Image2 from "../../../public/assets/enhance.png"
import Image3 from "../../../public/assets/achieve.png"
import Image4 from "../../../public/assets/Improve.png"
const forYouData = [
    {
        image: Image1,
        title: "Eliminate Stress and Anxiety",
        description: "Learn to control overbreathing, reduce hypocapnia, and maintain balance even in challenging situations."
    },
    {
        image: Image2,
        title: "Enhance Mental Clarity and Focus",
        description: "Boost oxygen and glucose supply to your brain by aligning your breathing mechanics."
    },
    {
        image: Image3,
        title: "Achieve Peak Performance",
        description: "Whether you’re giving a presentation, running a marathon, or meditating, experience the benefits of a well-aligned breath."
    },
    {
        image: Image4,
        title: "Improve Physical Health",
        description: "Address symptoms like shortness of breath, dizziness, and fatigue by optimizing your acid-base physiology."
    }
]
const ForYou = () => {
    return (
        <section className='for_you_section lg:!mt-[180px] md:!mt-[100px] !mt-[50px]'>
            <div className="container">
                <h2 className='text-center font-bold !mb-5'>What Can the CapnoTrainer®GO Do for You?</h2>
                <div className='flex gap-[30px] flex-wrap'>
                    {forYouData.map((item,i) => (
                        <div key={i} className='lg:max-w-[calc(25%-23px)] md:max-w-[calc(50%-15px)] w-full bg-primary rounded-b-[8px] rounded-t-[10px] '>
                            <div><img src={item.image} alt="Card Image" className='w-full rounded-[10px] h-[250px]' /></div>
                            <div className='bg-primary rounded-[8px] text-white !p-5 !mt-[-20px] relative'>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    )
}

export default ForYou
