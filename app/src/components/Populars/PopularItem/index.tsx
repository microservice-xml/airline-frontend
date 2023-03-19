import "./index.scss";

const PopularItem: React.FC<{ city: string; imgUrl: string }> = (props) => {
  return (
    <div className="popular-item">
      <div
        className="popular-item__background"
        style={{
          backgroundImage: `url(${props.imgUrl})`,
          backgroundSize: "cover",
        }}
      ></div>
      <div className="popular-item__text">
        <div className="popular-item__text--title"> {props.city}</div>
        <div className="popular-item__text__links">
          <div className="popular-item__text__links--flight">Flights</div> •
          <div className="popular-item__text__links--news">News</div>
        </div>
      </div>
    </div>
  );
};

export default PopularItem;
