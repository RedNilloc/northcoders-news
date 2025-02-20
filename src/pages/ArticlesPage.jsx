import { useEffect, useState } from "react";
import ArticleCard from "../Components/ArticleCard";
import React from "react";
import { Link } from "react-router";
import "../App.css";
import axios from "axios";

function ArticlesPage() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://nilloc-northcoders-news-api.onrender.com/api/articles/`)
      .then((res) => {
        setArticles(res.data.articles);
      })
      .catch((err) => {
        setError(true);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div>
        <h2>
          Behold the Articles of <div id="power1">P</div>
          <div id="power2">o</div>
          <div id="power3">w</div>
          <div id="power4">e</div>
          <div id="power5">r</div>
          <div id="power6">!</div>
        </h2>
      </div>
      <div>
        {articles.map((article) => {
          return (
            <>
              <div className="articles-page-articles">
                {" "}
                <ArticleCard article={article} />{" "}
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
export default ArticlesPage;
