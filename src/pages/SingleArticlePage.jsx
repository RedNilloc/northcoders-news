import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import CommentsPage from "./CommentsPage";
import ArticleVotesCounter from "../Components/ArticleVotesCounter";
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
      <div>
        <CommentsPage article_id={article_id}/>
       </div>
       <ArticleVotesCounter article_id={article_id} />
    </>
  );
}

export default SingleArticlePage;
