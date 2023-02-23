import { BsMusicNoteBeamed, BsStopwatch } from "react-icons/bs";

import LatestDownloadItm from "./LatestDownloadItm";
import LatestDownloadsProps from "../../interfaces/LatestDownloads/LatestDownloadsProps";

function LatestDownloads(props: LatestDownloadsProps) {
  const { latestList, setLatestList } = props;
  
  return (
    <div id="latest-downloads">
        <h3 className="bottom-section-title">
          <BsStopwatch />
          Latest Downloads
        </h3>

        <div>
          {
            latestList ? latestList.map((d) => {
              return (
                <LatestDownloadItm
                  title={d.title}
                  id={d.id}
                  setLatestList={setLatestList}
                />
              )
            }) : (
              <div id="no-recent-downloads">
                <BsMusicNoteBeamed />
                <span>No recent downloads...</span>
              </div>
            )
          }
        </div>
    </div>
  );
}

export default LatestDownloads;