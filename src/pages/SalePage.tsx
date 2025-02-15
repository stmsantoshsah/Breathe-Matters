import React from 'react'
import Layout from '../components/layout/Layout'
import HeroSection from '../components/sections/HeroSection'
import HeroImage from "/assets/capnotrainer.png"
import LogoSlider from '../components/sections/LogoSlider'
import Discover from '../components/sections/Discover'
import CapnoTrainer from '../components/sections/CapnoTrainer'
import Power from '../components/sections/Power'
import Works from '../components/sections/Works'
import WhatMakesUsDifferent from '../components/sections/WhatMakesUsDifferent'
import BenefitsSection from '../components/sections/BenefitsSection'
import TestimonialSection from '../components/sections/TestimonialSection'
import KeyFeatures from '../components/sections/KeyFeatures'
import AccordianSec from '../components/sections/AccordianSec.tsx'
import Newsletter from '../components/sections/Newsletter.tsx'
import ForYou from '../components/sections/ForYou.tsx'
import TakeControl from '../components/sections/TakeControl.tsx'

function SalePage() {

    return (
        <Layout>
            <HeroSection title="Transform Your Life with the Revolutionary CapnoTrainer® GO" subtitle="Breathe Smarter, Live Better" description="Breathing is more than just an unconscious action—it’s a foundation of health, performance, and emotional well-being. But what if your breathing habits are silently holding you back? Enter the CapnoTrainer® GO, the groundbreaking tool that merges science, psychology, and technology to revolutionize your breathing habits and transform your life." imageSrc={HeroImage} />
            <LogoSlider />
            <Discover />
            <CapnoTrainer />
            <Power />
            <Works />
            <WhatMakesUsDifferent />
            <BenefitsSection />
            <TestimonialSection />
            <KeyFeatures />
            <ForYou />
            <TakeControl />
            <AccordianSec />
            <Newsletter />
        </Layout>
    )
}

export default SalePage
