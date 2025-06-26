import React from 'react'
import '../styles/HeroSection.css';
import AnimatedSection from './AnimatedSection';

const HeroSection = () => {
  return (
    <AnimatedSection>
    <section className="hero">
      <div className="hero-left">
        <div className="hero-image-circle">
          <img src="/photo1.jpg" alt="Kid Learning" className="hero-image" />
        </div>
      </div>
      <div className="hero-right">
        <p className="subtitle">Learning Center For Next Generation</p>
        <h1 className="title">New Approach to Kids<br />Education</h1>
        <button className="learn-more-btn">Learn More</button>
      </div>
    </section>
    </AnimatedSection>
  )
}

export default HeroSection
