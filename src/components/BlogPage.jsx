// BlogPage.jsx
import React, { useState } from 'react';
import BlogList from '../components/BlogList';
import './BlogPage.css';

const BlogPage = () => {
  const [search, setSearch] = useState('');

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className="blog-page">
      <header className="blog-header">
        <h1>ByteWise Blog</h1>
        <p>Explore our latest posts on web development, coding, and tech trends.</p>
        <input
          type="text"
          placeholder="Search blog posts..."
          value={search}
          onChange={handleSearchChange}
          className="search-input"
        />
      </header>
      
      <section className="featured-section">
        <h2>Featured Posts</h2>
        {/* Replace with actual featured posts */}
        <BlogList featured />
      </section>
      
      <section className="all-posts">
        <h2>All Posts</h2>
        <BlogList search={search} />
      </section>
    </div>
  );
};

export default BlogPage;
