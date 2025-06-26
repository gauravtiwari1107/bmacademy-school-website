import React from 'react'
import {motion} from 'framer-motion';
import CountUp from 'react-countup'
import '../styles/About.css'
import AnimatedSection from '../components/AnimatedSection';

const About = () => {
  return (

      <AnimatedSection>
    <div className="about-page">

      {/* Hero Banner */}
      <section className="about-hero">
        <h1>About Better Millennium Academy</h1>
        <p>Shaping futures with care, commitment, and creativity</p>
      </section>

      {/* About Description */}
      <section className="about-description">
        <div className="about-image">
          <img src="/photo3.jpg" alt="Our School" />
        </div>
        <div className="about-text">
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
          <ul>
            <li>✅ Qualified teachers with training in child psychology & modern pedagogy</li>
            <li>✅ Max 25 students per class for personalized learning</li>
            <li>✅ Smart classrooms, labs, library & safe infrastructure</li>
          </ul>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="mission-vision">
        <div className="mv-item">
          <h3>Our Mission</h3>
          <p>To empower young minds through holistic education, instilling values, knowledge, and creativity that lasts a lifetime.</p>
        </div>
        <div className="mv-item">
          <h3>Our Vision</h3>
          <p>To be a center of excellence in primary education, nurturing responsible future citizens with compassion, curiosity, and confidence.</p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us">
        <h2>Why Choose Better Millennium Academy?</h2>
        <div className="choose-grid">
          <div className="choose-card">
            <h3>Child-Centric Approach</h3>
            <p>We foster holistic development through a curriculum tailored to each child's potential and interest.</p>
          </div>
          <div className="choose-card">
            <h3>Modern Facilities</h3>
            <p>Digital classrooms, clean & safe environment, sports, and creative labs support learning beyond textbooks.</p>
          </div>
          <div className="choose-card">
            <h3>Experienced Educators</h3>
            <p>Highly trained faculty who are passionate about teaching and mentorship.</p>
          </div>
          <div className="choose-card">
            <h3>Value-Based Learning</h3>
            <p>We instill discipline, kindness, leadership, and moral responsibility in every child.</p>
          </div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="principal-message">
        <div className="principal-container">
          <img src="/principal.jpg" alt="Principal" />
          <div>
            <h2>A Message from the Principal</h2>
            <p>
              “At Better Millennium Academy, we believe in nurturing not just academic brilliance, but also emotional intelligence, confidence, and values.
              I welcome you to a space where every child is seen, heard, and guided towards their best future.”
            </p>
            <p><strong>- Principal, Better Millennium Academy</strong></p>
          </div>
        </div>
      </section>

      {/* School Stats */}
      <section className="school-stats">
        <h2>Our Impact in Numbers</h2>
        <div className="stats-grid">
          <div className="stat-card">
            <h3><CountUp end={800} duration={3} />+</h3>
            <p>Students Enrolled</p>
          </div>
          <div className="stat-card">
            <h3><CountUp end={35} duration={3} /></h3>
            <p>Qualified Teachers</p>
          </div>
          <div className="stat-card">
            <h3><CountUp end={97} duration={3} />%</h3>
            <p>Parent Satisfaction</p>
          </div>
          <div className="stat-card">
            <h3><CountUp end={20} duration={3} />+</h3>
            <p>Years of Legacy</p>
          </div>
        </div>
      </section>

    </div>

    </AnimatedSection>
  )
}

export default About
