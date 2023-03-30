import { useState, useEffect } from "react";
import ArticleItem from "../../model/Article";
import { getAllArticles } from "../../services/news/newsService";
import "./index.scss";
import PopularItem from "./PopularItem";
import cities from "../../constants/Cities";

const images = [
  {path: "tokyo", label: 'Tokyo'},
  {path: "barcelona", label: 'Barcelona'},
  {path: "Stockholm", label: 'Stockholm'},
  {path: "buenos", label: 'Buenos Aires'},
  {path: "rome", label: 'Rome'},
  {path: "paris", label: 'Paris'}
]

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
    for (let image of images) {
      result.push(
        <PopularItem
          key={image.path}
          imgUrl={require("../../assets/images/backgrounds/" +
            image.path +
            ".jpg")}
          city={image.label || "Beograd"}
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
