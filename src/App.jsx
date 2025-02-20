import { useEffect, useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Homepage from "./pages/HomePage";
import ArticlesPage from "./pages/ArticlesPage";
import SingleArticlePage from "./pages/SingleArticlePage";
import CommentsPage from "./pages/CommentsPage";
import ArticleVotesCounter from "./Components/ArticleVotesCounter";
import "./App.css";
import { Routes, Route } from "react-router";
import axios from "axios";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/articles" element={<ArticlesPage/>}></Route>
        <Route path="/articles/:article_id" element={<SingleArticlePage/>}></Route>
        <Route path="/articles/:article_id/comments" element={<CommentsPage/>}></Route>
      </Routes>
      <Footer />
      <Navbar />    
    </>
  );
}

export default App;
