import { BsDownload } from "react-icons/bs";
import LatestDownloadSong from "./LatestDownloadSong";

function LatestDownloadItm(props: LatestDownloadSong) {
  const { artist, title, link } = props;

  return (
    <div className="latest-download-itm">
      <a href={props.link}>
        <BsDownload />
      </a>
      {`${title} - ${artist}`}
    </div>
  );
}

export default LatestDownloadItm;