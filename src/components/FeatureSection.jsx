import React from 'react'
import '../styles/FeatureSection.css';
import { FaMusic, FaBus, FaAppleAlt, FaPaintBrush, FaGraduationCap, FaChild } from 'react-icons/fa'
import AnimatedSection from './AnimatedSection';

const features = [
  {
    icon: <FaChild />,
    title: 'Play Ground',
    description: 'Our spacious outdoor playground provides a safe environment for children to develop physical skills, social interaction, and creative play through age-appropriate equipment and supervised activities.',
  },
  {
    icon: <FaMusic />,
    title: 'Music and Dance',
    description: 'We nurture artistic expression through comprehensive music and dance programs, helping students develop rhythm, coordination, and cultural appreciation while building confidence.',
  },
  {
    icon: <FaPaintBrush />,
    title: 'Arts and Crafts',
    description: 'Creative workshops and art classes encourage imagination and fine motor skills through painting, sculpture, and hands-on crafts.',
  },
  {
    icon: <FaBus />,
    title: 'Safe Transportation',
    description: 'Our reliable transport ensures student safety with GPS-tracked buses, trained drivers, and designated pickup points.',
  },
  {
    icon: <FaAppleAlt />,
    title: 'Healthy Food',
    description: 'Nutritious, freshly prepared meals and snacks are provided daily using locally sourced, wholesome ingredients.',
  },
  {
    icon: <FaGraduationCap />,
    title: 'Educational Tour',
    description: 'Field trips and educational excursions enhance learning through real-world experiences and interactive opportunities.',
  },
]

const FeaturesSection = () => {
  return (
    <AnimatedSection>
    <section className="features-section">
      <div className="features-grid">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>

    </AnimatedSection>
  )
}

export default FeaturesSection
