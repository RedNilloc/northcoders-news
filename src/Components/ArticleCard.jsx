function ArticleCard({article}) {
    return <>
    <p>{article.title}</p>
    <img src={article.article_img_url}/>
    <p>{article.topic}</p>
    <p>{article.votes}</p>
    <p>{article.comment_count}</p>
    <button>View Comments</button>
    </>
}

export default ArticleCard