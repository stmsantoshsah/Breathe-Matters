import React from 'react'
import ControlBg from '../../assets/take.png'
const TakeControl = () => {
    return (
        <section className='w-full h-[530px] lg:!mt-[160px] md:!mt-[100px] !mt-[50px]' style={{ backgroundImage: `url(${ControlBg})`,backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover" }}>
            <div className="container">
                <div className='text-right max-w-[910px] !ml-auto !pt-8 text-white'>
                    <h2 className='lg:!text-[73px] md:!text-[50px] !text-[40px] text-right !mb-6 lg:!leading-[112px] !leading-[normal]'>Take Control of Your <br/> Breath Today!</h2>
                    <p className='text-left max-w-[550px] !ml-auto'>Invest in the Science of Better Breathing <br/>
                        For a limited time, get your CapnoTrainer®GO at an exclusive launch price!</p>
                    <div style={{ boxShadow: "0px -3px 6px 0px #0000001A" }} className='btn-box relative bg-black inline-flex !p-8 !mt-[75px]'>
                        <button className='bg-white text-primary !p-5 rounded-[8px] cursor-pointer hover:bg-primary hover:text-white transition transition-all duration-300 ease-in-out'>Order now and receive a FREE personalized breathing evaluation plan!</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TakeControl
