import AccordionLanding from "../../components/Accordion";
import InfoCard from "../../components/InfoCard";
import LandingArticle from "../../components/LandingArticle";
import Populars from "../../components/Populars";
import SearchComponent from "../../components/SearchComponent";
import "./index.scss";

const LandingPage = () => {
  return (
    <div className="landing">
      <div className="landing__search">
        <SearchComponent></SearchComponent>
      </div>
      <div className="landing__cards">
        <div className="landing__cards-container">
          <InfoCard
            title="Cheap Flights"
            routerUrl="/news"
            imgUrl={require("../../assets/images/icons/takeoff1.png")}
          />
          <InfoCard
            title="Latest blogs"
            routerUrl="/news"
            imgUrl={require("../../assets/images/icons/blogs.png")}
          />
          <InfoCard
            title="Explore the world"
            routerUrl="/news"
            imgUrl={require("../../assets/images/icons/planet.png")}
          />
        </div>
      </div>
      <div className="landing__article">
        <LandingArticle />
      </div>
      <div className="landing__populars">
        <Populars />
      </div>
      <div className="landing__accordion">
        <AccordionLanding />
      </div>
    </div>
  );
};

export default LandingPage;
