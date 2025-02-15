import React from 'react'
const newsletterData = {
    title: "Don’t Wait",
    subTitle: "Transform Your Breathing Today!",
    description: "Your breath is your power. Take control with the CapnoTrainer® GO, and experience life with greater clarity, confidence, and vitality.",
    buttonText: " Order Now and Start Your Breathing Journey!"
}
const Newsletter: React.FC = () => {
    return (
        <section className='newsletter_section relative z-10' >
            <div className="container !py-20 text-center rounded-[8px] newsletter_content relative z-10" style={{
                background: "radial-gradient(50% 50% at 50% 50%, #008080 0%, #035C5C 100%)"
            }}>
                <div className='text-center'>
                    <h3 className='text-white font-spectral text-[24px] font-bold'>{newsletterData.title}</h3>
                    <h2 className='text-white '>{newsletterData.subTitle}</h2>
                    <p className='text-white text-[16px] max-w-[520px] !mx-auto !my-5 text-center'>{newsletterData.description}</p>
                    <button className='bg-white text-primary !p-5 rounded-[8px] !mt-8 cursor-pointer hover:bg-primary hover:text-white'>{newsletterData.buttonText}</button>
                </div>
            </div>
        </section>
    )
}

export default Newsletter
