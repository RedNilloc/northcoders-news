


function CommentCard({CardComment}) {
return <>
<div id="CommentCard">
<p>Author: {CardComment.author}</p>
<p>"{CardComment.body}"</p>
<p>Score: {CardComment.votes}</p>
<p>Posted At: {CardComment.created_at}</p>
</div>


</>

}

export default CommentCard