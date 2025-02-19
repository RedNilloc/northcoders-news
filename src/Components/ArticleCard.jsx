import { Link } from "react-router-dom"

function ArticleCard({article}) {
    return <>
    <h3>{article.title}</h3>
    <button className = "article-card"> <img id="article-image" alt="Relevant mage for listed article" src={article.article_img_url}/> </button>
    <Link to={`/articles/${article.article_id}`}>
    <p><button className = "view-article">Click to View Article</button></p>
    </Link>
    <p id="article-topic">Topic: {article.topic}</p>
    <span id="article-votes">Votes: {article.votes}</span>
    <span>Comments: {article.comment_count}</span>
    <p><button>View Comments</button></p>
    </>
}

export default ArticleCard

// should the title be made the button in addition to the image?