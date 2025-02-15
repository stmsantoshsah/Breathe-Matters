import React from 'react'
import Cards from './Cards'

const Power = () => {
    return (
        <section className='power_section bg-[#E6F2F2] !py-[100px] !mt-[100px]'>
            <div className="container">
                <div className='text-center !mb-5'>
                    <p>Experience</p>
                    <h2 className='text-primary'>Power of CapnoTrainer® GO</h2>
                </div>
                <Cards />
            </div>
        </section>
    )
}

export default Power
