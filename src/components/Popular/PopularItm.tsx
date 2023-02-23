import Skeleton from "react-loading-skeleton";
import PopularSong from "./PopularSong";
import { BsDownload } from "react-icons/bs";
import { toast } from 'react-toastify';
import { sliceText } from "../../Utils/StringFunctions";

function PopularItm(props: PopularSong) {
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
            <h3 title={title ? title : ''}>{title ? sliceText(title) : <Skeleton width="80%" />}</h3>
          </div>
        </div>
        <span className="text-fade">{artist ? sliceText(artist) : <Skeleton width="60%" />}</span>
      </div>
    </div>
  );
}

export default PopularItm;