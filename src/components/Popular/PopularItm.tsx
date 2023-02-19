import Skeleton from "react-loading-skeleton";
import PopularSong from "./PopularSong";

const sliceText = (text: string): string => {
  let sliced = text.slice(0, 18);
  
  if (text.length >= 18) {
    sliced += "...";
  }

  return sliced;
}

function PopularItm(props: PopularSong) {
  const { image, title, artist } = props;

  return (
    <div className="popular-itm">
      <div className="popular-item-img">
        {image ? <img src={image} /> : <Skeleton height="3.6rem" width="3.6rem" />}
      </div>
      <div className="popular-item-info">
        <h3 title={title ? title : ''}>{title ? sliceText(title) : <Skeleton width="80%" />}</h3>
        <span className="text-fade">{artist ? sliceText(artist) : <Skeleton width="60%" />}</span>
      </div>
    </div>
  );
}

export default PopularItm;