import { useEffect, useState } from "react";
import CommentCard from "../Components/CommentCard";
import React from "react";
import { Link, useParams } from "react-router";
import "../App.css";
import axios from "axios";

function CommentsPage({ article_id }) {
  const [comment, setComment] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://nilloc-northcoders-news-api.onrender.com/api/articles/${article_id}/comments`
      )
      .then((res) => {
        setComment(res.data.comment);
      })
      .catch((err) => {
        setError(true);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <div>
        <h2>Check out what people are saying about this!</h2>
      </div>
      <div>
        {comment.map((CardComment) => {
          return (
            <>
              <div className="comments-page-comments">
                <CommentCard CardComment={CardComment} />
              </div>
            </>
          );  
        })}
      </div>
    </>
  );
}

export default CommentsPage;
