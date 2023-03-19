import { useState, useEffect } from "react";
import ArticleItem from "../../model/Article";
import { getAllArticles } from "../../services/news/newsService";
import "./index.scss";
import PopularItem from "./PopularItem";
import cities from "../../constants/Cities";
const Populars = () => {
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

    if (articles?.length === 0) {
      return <div>There are no selected articles...</div>;
    }

    let i = 0;
    for (let article of articles.slice(0, 6)) {
      result.push(
        <PopularItem
          key={article.id}
          imgUrl={require("../../assets/images/backgrounds/" +
            article.slug +
            ".jpg")}
          city={cities.at(i)?.label || "Beograd"}
        />
      );
      i++;
    }
    return result;
  };

  return (
    <div className="populars">
      <div className="populars__header">
        <div className="populars__header--title">Popular right now</div>
        <div className="populars__header--desc">
          Other travellers are loving these destinations. Search flights,
          hotels, and car hire and join them on the adventure.
        </div>
      </div>
      <div className="populars__cards">{renderArticles()}</div>
    </div>
  );
};

export default Populars;
