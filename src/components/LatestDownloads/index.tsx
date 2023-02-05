import { BsStopwatch } from "react-icons/bs";

import LatestDownloadItm from "./LatestDownloadItm";
import LatestDownloadSong from "./LatestDownloadSong";

let downloads: LatestDownloadSong[];

downloads = [
  { title: "Lorem Sit", artist: "50 Cent", link: "http://www.google.com" },
  { title: "Dolor Ipsum", artist: "Rah Swish", link: "http://www.google.com" },
  { title: "Sit Amet", artist: "Fetty Wap", link: "http://www.google.com" }
];

function LatestDownloads() {
  return (
    <div id="latest-downloads">
        <h3>
          <BsStopwatch />
          Latest Downloads
        </h3>

        <div>
          {
            downloads.map((d) => {
              return (
                <LatestDownloadItm
                  title={d.title}
                  artist={d.artist}
                  link={d.link}
                />
              )
            })
          }
        </div>
    </div>
  );
}

export default LatestDownloads;