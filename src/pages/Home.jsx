import React from 'react'
import {motion} from 'framer-motion';
import HeroSection from '../components/HeroSection'
import FeaturesSection from '../components/FeatureSection'
import AboutSection from '../components/AboutSection'
import AnimatedSection from '../components/AnimatedSection';

const Home = () => {
    return (

        <AnimatedSection>
        <div>
            <HeroSection/>

            <FeaturesSection/>

            <AboutSection/>
        </div>

        </AnimatedSection>
    )
}
export default Home
