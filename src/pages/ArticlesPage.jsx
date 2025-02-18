import ArticleCard from "../Components/ArticleCard";
import React from "react";
import { Link } from "react-router";

function ArticlesPage({ articles }) {
  return <>
      <div>
        <h2>Behold the Articles of Power!</h2>
      </div>
      <div>
        <ul>
          {articles.map((article) => {
            return <>
                <ArticleCard article={article} />
              </>
          })}
        </ul>
      </div>
    </>
}
export default ArticlesPage;
