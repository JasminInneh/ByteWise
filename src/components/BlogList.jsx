// BlogCard.jsx
import React from 'react';

const BlogCard = ({ title, summary, date }) => (
  <div>
    <h2>{title}</h2>
    <p>{summary}</p>
    <small>{date}</small>
  </div>
);

export default BlogCard;

