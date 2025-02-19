import ArticleCard from "../Components/ArticleCard";
import React from "react";
import { Link } from "react-router";
import "../App.css";

function ArticlesPage({ articles }) {
  return <>
      <div>
        <h2>Behold the Articles of <div id="power1">P</div><div id="power2">o</div><div id="power3">w</div><div id="power4">e</div><div id="power5">r</div><div id="power6">!</div></h2>
      </div>
      <div>
          {articles.map((article) => {
            return <>
              <div className="articles-page-articles"> <ArticleCard article={article}/> </div>
              </>
          })}
      </div>
    </>
}
export default ArticlesPage;
