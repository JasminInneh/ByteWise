import React from 'react';
import { useParams } from 'react-router-dom';
import articlesData from '../data/articles.json';

const Article = () => {
    const { id } = useParams(); // Get the article ID from the URL
    const [article, setArticle] = useState(null);
  
    useEffect(() => {
      // Find the article by its ID
      const foundArticle = articlesData.find((article) => article.id === id);
      setArticle(foundArticle);
    }, [id]);
  
    if (!article) {
      return <div>Article not found</div>;
    }
  
    return (
      <div>
        <h1>{article.title}</h1>
        <p>{article.content}</p>
      </div>
    );
  };
  
  export default Article;