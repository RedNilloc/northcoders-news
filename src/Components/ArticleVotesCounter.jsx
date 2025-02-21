import { useState, useEffect } from "react";
import axios from "axios";

function ArticleVotesCounter({ article_id, articleVotes, setArticle }) {
  // const [articleVotes, setArticleVotes] = useState(articleScore);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);


  const handleVote = (voteUpdate) => {
    setArticle((currentArticle) => {return {...currentArticle, votes:articleVotes + voteUpdate}  });

    setLoading(true);
    axios
      .patch(  
        `https://nilloc-northcoders-news-api.onrender.com/api/articles/${article_id}`,
       {inc_votes: voteUpdate})
       .catch((err) => {
        setError(true);
      })
      .finally(() => setLoading(false));
  }

  // if (loading) {
  //   return <p>Loading...</p>;
  // }
 
// at the moment the votes aren't being made permanent

  return <>
  <div>
    <button onClick={() => handleVote(1)}>Upvote!</button>
    <p>{articleVotes}</p>
    <button onClick={() => handleVote(-1)}>Downvote!</button>
  </div>
  </>;
 
}

export default ArticleVotesCounter;
