import React from 'react'
import '../styles/AboutSection.css'
import AnimatedSection from './AnimatedSection'

const AboutSection = () => {
  return (

    
    <AnimatedSection>

    <section className="about-section">
      <div className="about-container">
        <div className="about-image">
          <img src="/photo2.jpg" alt="About Our School" />
        </div>
        <div className="about-content">
          <h2>Best School for Kids</h2>
          <p>
            At Better Millennium Academy, we understand that choosing the right school for your child is one of the most important decisions you'll make as a parent.
            Our nurturing environment combines academic excellence with character development, ensuring each student receives personalized attention in their learning journey.
          </p>

                    <p>
             With experienced educators, modern facilities, and a curriculum designed to inspire curiosity and critical thinking,
            we prepare students not just for exams, but for life. Our commitment extends beyond the classroom, fostering creativity, leadership,
            and social responsibility in every child who walks through our doors.
         
          </p>
           <ul className="about-highlights">
            <li>✅ Qualified teachers with specialized training in child psychology and modern pedagogy</li>
            <li>✅ Individual attention with maximum 25 students per class for optimal learning outcomes</li>
            <li>✅ Comprehensive facilities including digital classrooms, science labs, and a well-stocked library</li>
          </ul>
        </div>
      </div>
    </section>

</AnimatedSection>
  )
}

export default AboutSection
