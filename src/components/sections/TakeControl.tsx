import React from 'react'
import ControlBg from '../../assets/take.png'
const TakeControl = () => {
    return (
        <section className='w-full' style={{ backgroundImage: `url(${ControlBg})`,backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover" }}>
            <div className="container">
                <div className='text-right max-w-[910px] !ml-auto !pt-8 text-white'>
                    <h2 className='!text-[73px] text-right'>Take Control of Your <br/> Breath Today!</h2>
                    <p>Invest in the Science of Better Breathing
                        For a limited time, get your CapnoTrainer®GO at an exclusive launch price!</p>
                    <div style={{ boxShadow: "0px -3px 6px 0px #0000001A" }} className='bg-black inline-flex !p-8 '>
                        <button className='bg-white text-primary '>Order now and receive a FREE personalized breathing evaluation plan!</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TakeControl
