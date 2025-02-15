import React from 'react'
const newsletterData = {
    title: "Don’t Wait",
    subTitle: "Transform Your Breathing Today!",
    description: "Your breath is your power. Take control with the CapnoTrainer® GO, and experience life with greater clarity, confidence, and vitality.",
    buttonText: " Order Now and Start Your Breathing Journey!"
}
const Newsletter: React.FC = () => {
    return (
        <section className='newsletter_section ' >
            <div className="container !py-20 text-center rounded-[8px]" style={{background:"radial-gradient(50% 50% at 50% 50%, #008080 0%, #035C5C 100%)"
}}>
                <div className=''>
                    <h3 className='text-white'>{newsletterData.title}</h3>
                    <h2 className='text-white'>{newsletterData.subTitle}</h2>
                    <p className='text-white'>{newsletterData.description}</p>
                    <button className='bg-white text-primary !py-3 !px-6'>{newsletterData.buttonText}</button>
                </div>
            </div>
        </section>
    )
}

export default Newsletter
