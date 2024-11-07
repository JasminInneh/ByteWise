// BlogList.jsx
import React, { useState, useEffect } from 'react';
import BlogCard from './BlogCard';
import '../BlogList.css';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Add more sample blog data
    setBlogs([
      { title: 'Learn React Basics', summary: 'A beginner-friendly guide to React.', date: 'Nov 2024' },
      { title: 'Why Coding Blogs Matter', summary: 'Exploring the value of blogging in tech.', date: 'Oct 2024' },
      { title: 'Advanced CSS Tips', summary: 'Level up your styling skills with advanced CSS techniques.', date: 'Sep 2024' },
      { title: 'JavaScript in 2025', summary: 'What’s new and trending in JavaScript this year.', date: 'Aug 2024' },
    ]);
  }, []);

  return (
    <div className="blog-list">
      {blogs.map((blog, index) => (
        <BlogCard key={index} {...blog} />
      ))}
    </div>
  );
};

export default BlogList;


