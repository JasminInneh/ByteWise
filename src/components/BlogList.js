import React, { useState, useEffect } from 'react';
import BlogCard from './BlogCard';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // This would be replaced with a fetch to your blog API or data source
    setBlogs([
      { title: 'Learn React Basics', summary: 'A beginner-friendly guide to React.', date: 'Nov 2024' },
      { title: 'Why Coding Blogs Matter', summary: 'Exploring the value of blogging in tech.', date: 'Oct 2024' },
    ]);
  }, []);

  return (
    <div>
      {blogs.map((blog, index) => (
        <BlogCard key={index} {...blog} />
      ))}
    </div>
  );
};

export default BlogList;
