import { useEffect, useState } from "react";
import Article from "../../components/Article";
import ArticleItem from "../../model/Article";
import { getAllArticles } from "../../services/news/newsService";
import "./index.scss";

function News() {
  const [articles, setArticles] = useState<ArticleItem[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let response: any;
    response = await getAllArticles();
    setArticles(response.data as ArticleItem[]);
  };

  const renderArticles = () => {
    let result = [];

    if (articles.length === 0) {
      return <div>There are no selected articles...</div>;
    }

    for (let article of articles) {
      result.push(
        <Article
          key={article.id}
          title={article.title}
          author={article.author}
          imgUrl={require("../../assets/images/backgrounds/" +
            article.slug +
            ".jpg")}
          slug={article.slug}
        />
      );
    }

    return result;
  };

  return (
    <div className="news">
      <div className="news__articles">{renderArticles()}</div>
    </div>
  );
}

export default News;
