import Skeleton from "react-loading-skeleton";
import PopularItmProps from "../../interfaces/Popular/PopularItmProps";
import { BsDownload } from "react-icons/bs";

function PopularItm(props: PopularItmProps) {
  const { image, title, artist, id, setId } = props;

  return (
    <div className="popular-itm">
      <div className="popular-item-img">
        {image ? <img src={image} /> : <Skeleton height="3.6rem" width="3.6rem" />}
      </div>
      <div className="popular-item-info">
        <div className="popular-title-bar">
          {
            (id && setId) && (
              <span>
                <BsDownload
                  className="download-btn-popular"
                  title="Download Music"
                  onClick={() => {
                    if (id && setId) {
                      setId(id);
                    }
                  }}
                />
              </span>
            )
          }
          <div>
            <h3 className="ellipsis" title={title}>{title ? title : <Skeleton width="80%" />}</h3>
          </div>
        </div>
        <span className="text-fade ellipsis">{artist ? artist : <Skeleton width="60%" />}</span>
      </div>
    </div>
  );
}

export default PopularItm;