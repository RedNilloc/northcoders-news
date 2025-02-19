import { useEffect, useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Homepage from "./pages/HomePage";
import ArticlesPage from "./pages/ArticlesPage";
import SingleArticlePage from "./pages/SingleArticlePage";
import "./App.css";
import { Routes, Route } from "react-router";
import axios from "axios";

function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false)
// ^ what should the initial state be for this?
  useEffect(() => {
    setLoading(true)
    axios.get(`https://nilloc-northcoders-news-api.onrender.com/api/articles/`).then((res) => {
        setArticles(res.data.articles)                                       
        // console.log(res.data.articles, "Hello fren") 
    }).catch((err) => {
        setError(true)
    }).finally(() => setLoading(false))
  }, [])


  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/articles" element={<ArticlesPage articles={articles}/>}></Route>
        <Route path="/articles/:article_id" element={<SingleArticlePage/>}></Route>
      </Routes>
      <Footer />
      <Navbar />    
    </>
  );
}

export default App;
