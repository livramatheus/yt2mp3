import PopularSong from "./PopularSong";

function PopularItm(props: PopularSong) {
  const { image, title, artist } = props;

  return (
    <div className="popular-itm">
      <div className="popular-item-img">
        <img src={image} />
      </div>
      <div className="popular-item-info">
        <h3>{title}</h3>
        <span className="text-fade">{artist}</span>
      </div>
    </div>
  );
}

export default PopularItm;