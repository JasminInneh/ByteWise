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
  background: #2a2a2a;
  color: #fff;
  padding: 1.5rem;
  border-radius: 8px;
  margin: 1rem 0;
`;

export default BlogCard;
