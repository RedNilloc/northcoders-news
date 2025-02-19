import { useParams } from "react-router-dom";
import { useState, useEffect} from "react";
import axios from "axios"

function SingleArticlePage(){
const {article_id} = useParams();
const [article, setArticle] = useState([])
const [loading, setLoading] = useState(false)

useEffect(() => {
    setLoading(true)
    axios.get(`https://nilloc-northcoders-news-api.onrender.com/api/articles/${article_id}`).then((res) => {
      console.log(res.data.article, "Yo Adrian") 
      setArticle(res.data.article)                                
    }).catch((err) => {
        setError(true)
    }).finally(() => setLoading(false))
  }, [article_id])

if (loading) {
   return <p>Loading...</p>
}
return <>

<h3>{article.title}</h3>
<p>{article.body}</p>
<p>Posted: {article.created_at}</p>
<p>Rating: {article.votes}</p>

</>

}

export default SingleArticlePage