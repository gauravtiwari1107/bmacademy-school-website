import React, { useState } from 'react';
import '../styles/Gallery.css';
import { FaSearch, FaCamera, FaTheaterMasks, FaLayerGroup, FaStar } from 'react-icons/fa';
import AnimatedSection from '../components/AnimatedSection';

const galleryItems = [
  {
    title: 'Science Exhibition',
    date: 'March 15, 2024',
    tags: ['#science', '#exhibition', '#innovation'],
    category: 'Academics',
    image: '/gallery1.jpg',
  },
  {
    title: 'Annual Sports Day',
    date: 'February 10, 2024',
    tags: ['#sports', '#athletics', '#competition'],
    category: 'Sports',
    image: '/gallery2.jpg',
  },
  {
    title: 'Cultural Dance Performance',
    date: 'December 22, 2023',
    tags: ['#dance', '#culture', '#performance'],
    category: 'Cultural Events',
    image: '/gallery3.jpg',
  },
];

const categories = [
  'All Photos',
  'Academics',
  'Sports',
  'Cultural Events',
  'Field Trips',
  'Achievements',
];

const Gallery = () => {
  const [filter, setFilter] = useState('All Photos');
  const [search, setSearch] = useState('');
  const [visibleCount, setVisibleCount] = useState(6);

  const filteredItems = galleryItems.filter(
    (item) =>
      (filter === 'All Photos' || item.category === filter) &&
      item.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  return (

    <AnimatedSection>
    <div className="gallery-container">
      <section className="gallery-hero">
        <h5>📘 Student Life & Activities</h5>
        <h1>School Gallery</h1>
        <p>Capturing moments of learning, growth, and achievement</p>
        <p className="breadcrumb">Home &gt; Gallery</p>
      </section>

      <section className="gallery-filters">
        <div className="categories">
          {categories.map((cat, i) => (
            <button
              key={i}
              className={filter === cat ? 'active' : ''}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="search-box">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search gallery..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </section>

      <section className="gallery-grid">
        {filteredItems.slice(0, visibleCount).map((item, index) => (
          <div key={index} className="gallery-card">
            <div className="image-wrapper">
              <img src={item.image} alt={item.title} />
              <div className="overlay">
                <span>{item.title}</span>
              </div>
            </div>
            <div className="gallery-info">
              <h4>{item.title}</h4>
              <p>{item.date}</p>
              <div className="tags">
                {item.tags.map((tag, i) => (
                  <span key={i}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      {visibleCount < filteredItems.length && (
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <button className="load-more-btn" onClick={handleLoadMore}>
            Load More
          </button>
        </div>
      )}

      <section className="gallery-stats">
        <div className="stat-card"><FaCamera /> <h3>1,500+</h3><p>Photos</p></div>
        <div className="stat-card"><FaTheaterMasks /> <h3>50+</h3><p>Events</p></div>
        <div className="stat-card"><FaLayerGroup /> <h3>12</h3><p>Albums</p></div>
        <div className="stat-card"><FaStar /> <h3>5</h3><p>Years of Memories</p></div>
      </section>

      <section className="gallery-cta">
        <h2>Want to Be Part of Our Next Gallery?</h2>
        <p>Join Better Millennium Academy and be part of our vibrant community of learners. Discover how our students thrive in academics, sports, arts, and more.</p>
        <div className="cta-buttons">
          <button className="apply-btn">Apply for Admission</button>
          <button className="visit-btn">Schedule a Visit</button>
        </div>
      </section>
    </div>

    </AnimatedSection>
  );
};

export default Gallery;
