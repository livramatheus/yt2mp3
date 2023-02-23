import { useEffect, useState } from "react";
import { BsDownload } from "react-icons/bs";
import { toast } from "react-toastify";
import { fetchMp3Request } from "../../services/Mp3Request";
import Mp3Response from "../../services/Mp3Request/Mp3Response";
import startDownload from "../../Utils/StartDownload";
import { sliceText } from "../../Utils/StringFunctions";
import LatestDownloadItmProps from "../../interfaces/LatestDownloads/LatestDownloadItmProps";

function LatestDownloadItm(props: LatestDownloadItmProps) {
  const latestSongId = props.id;
  const { title, setLatestList } = props;

  const [id, setId] = useState('');
  const [response, setResponse] = useState<null | Mp3Response>(null);

  const notifyError = (message: string) => toast.error(message);
  const notifyDownloadStarted = (message: string) => toast(message);

  useEffect(() => {
    if (id) {
      notifyDownloadStarted("Download started! Please wait...");
      const fetchData = () => {
        let interval = setInterval(async function() {
          try {
            const res = await fetchMp3Request(id);
            
            if (res.status === 200 && res.data.status === "ok") {
              setResponse(res.data);
              clearInterval(interval);
            } else if (res.status === 200 && res.data.status === "fail") {
              notifyError('Invalid video link');
              clearInterval(interval);
            }
          } catch (error: any) {
            notifyError(error.message + ". Try again later");
            clearInterval(interval);
          }
        }, 2000);
      }

      fetchData();
    }
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