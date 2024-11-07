import React from 'react';
import styled from 'styled-components';

const BlogCard = ({ title, summary, date }) => {
  return (
    <Card>
      <h2>{title}</h2>
      <p>{summary}</p>
      <small>{date}</small>
    </Card>
  );
};

const Card = styled.div`
  background-color: #2a3e5b; /* Light navy/gray for contrast */
  color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  margin: 20px 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

export default BlogCard;



