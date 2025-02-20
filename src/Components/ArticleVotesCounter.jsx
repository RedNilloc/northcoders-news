import { useState, useEffect } from "react";

function ArticleVotesCounter({ article_id }) {
  const [articleVotes, setArticleVotes] = useState(0);

  useEffect(() => {
    getVotesCount(article_id).then((articleVotes) => {
      setArticleVotes(articleVotes);
    })
  }, []);

  const handleVote = () => {
    setArticleVotes((currentVotesCount) => currentVotesCount + 1);
    postVote();
  }

// this whole thing needs the app.patch endpoint

  return <>
  <div>
    <button onClick={handleVote}>Upvote!</button>
    <p>{articleVotes}</p>
  </div>
  </>;
}

export default ArticleVotesCounter;
