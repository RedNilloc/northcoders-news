import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import CommentsPage from "./CommentsPage";
import { Link } from "react-router";

function SingleArticlePage() {
  const { article_id } = useParams();
  const [article, setArticle] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://nilloc-northcoders-news-api.onrender.com/api/articles/${article_id}`
      )
      .then((res) => {
        setArticle(res.data.article);
      })
      .catch((err) => {
        setError(true);
      })
      .finally(() => setLoading(false));
  }, [article_id]);

  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <h3>{article.title}</h3>
      <p>{article.body}</p>
      <p>Posted: {article.created_at}</p>
      <p>Rating: {article.votes}</p>
       <Link to={`/articles/${article.article_id}/comments`}>
      <p><button className="view-comments">Click to View Comments</button></p>
      </Link>
    </>
  );
}

export default SingleArticlePage;
