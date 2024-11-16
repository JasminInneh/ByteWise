import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Article = () => {
  const { id } = useParams(); // Get the article ID from the URL
  const [article, setArticle] = useState(null);

  useEffect(() => {
    // Fetch the JSON file
    fetch('/article.json')

      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        // Find the article with the matching ID
        const fetchedArticle = data.find((article) => article.id === id);
        setArticle(fetchedArticle);
      })
      .catch((error) => console.error('Error fetching article:', error));
  }, [id]);

  // If the article is not found or still loading
  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.content}</p>
    </div>
  );
};

export default Article;
