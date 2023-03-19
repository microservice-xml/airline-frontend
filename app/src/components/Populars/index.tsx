import "./index.scss";
import PopularItem from "./PopularItem";

const Populars = () => {
  return (
    <div className="populars">
      <div className="populars__header">
        <div className="populars__header--title">Popular right now</div>
        <div className="populars__header--desc">
          Other travellers are loving these destinations. Search flights,
          hotels, and car hire and join them on the adventure.
        </div>
      </div>
      <div className="populars__cards">
        <PopularItem
          city="Beograd"
          imgUrl="/static/media/group-travel-tips.6975d95e186c2080b0c0.jpg"
        />
        <PopularItem
          city="Novi Sad"
          imgUrl="/static/media/bucket-list-destinations.6aa4c47820c363881b76.jpg"
        />
        <PopularItem
          city="Indjija"
          imgUrl="/static/media/best-things-to-do-london.b73baf99c630c93870d3.jpg"
        />
      </div>
    </div>
  );
};

export default Populars;
