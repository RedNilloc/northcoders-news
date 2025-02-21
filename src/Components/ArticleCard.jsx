import { Link } from "react-router-dom"

function ArticleCard({article}) {
    return <>
    <h3>{article.title}</h3>
    <img id="article-image" alt="Relevant mage for listed article" src={article.article_img_url}/>
    <Link to={`/articles/${article.article_id}`}>
    <p><button className = "view-article">Click to View Article</button></p>
    </Link>
    <p id="article-topic">Topic: {article.topic}</p>
    <span id="article-votes">Votes: {article.votes}</span>
    <span>Comments: {article.comment_count}</span>
    
    </>
}

export default ArticleCard
