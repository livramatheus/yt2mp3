import { useEffect, useState } from "react";
import { BsDownload } from "react-icons/bs";
import Mp3Response from "../../services/Mp3Request/Mp3Response";
import startDownload from "../../Utils/StartDownload";
import { sliceText } from "../../Utils/StringFunctions";
import LatestDownloadItmProps from "../../interfaces/LatestDownloads/LatestDownloadItmProps";
import manageDownloadRequest from "../../Utils/ManageDownloadRequest";

function LatestDownloadItm(props: LatestDownloadItmProps) {
  const latestSongId = props.id;
  const { title, setLatestList } = props;

  const [id, setId] = useState('');
  const [response, setResponse] = useState<null | Mp3Response>(null);

  useEffect(() => {
    manageDownloadRequest({
      id, setId, setResponse
    });
  }, [id]);

  useEffect(() => {
    startDownload({ response, setLatestList });
  }, [response]);

  return (
    <div className="latest-download-itm">
      <span
        title="Download again"
        onClick={
          () => {
            setId(latestSongId);
          }
        }
      >
        <BsDownload />
      </span>{sliceText(title, 58)}</div>
  );
}

export default LatestDownloadItm;