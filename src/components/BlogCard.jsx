import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const BlogCard = ({ id, title, summary, date }) => {
  return (
    <Link to={`/article/${id}`} style={{ textDecoration: 'none' }}> {/* Wrap with Link for navigation */}
      <Card>
        <h2>{title}</h2>
        <p>{summary}</p>
        <small>{date}</small>
      </Card>
    </Link>
  );
};

const Card = styled.div`
  background-color: #2a3e5b; /* Light navy/gray for contrast */
  color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  margin: 20px 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  /* Hover effect */
  &:hover {
    transform: scale(1.05);
  }

  /* Title styling */
  h2 {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 10px;
  }

  /* Summary styling */
  p {
    font-size: 1rem;
    margin-bottom: 10px;
  }

  /* Date styling */
  small {
    font-size: 0.875rem;
    color: #bbb;
  }
`;

export default BlogCard;
