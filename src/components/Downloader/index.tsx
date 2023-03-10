import { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import Body from "../Body";
import DownloadBtn from "../DownloadBtn";
import { fetchMp3Request } from "../../services/Mp3Request";
import Mp3Response from "../../services/Mp3Request/Mp3Response";
import DownloaderProps from "../../interfaces/Downloader/DownloaderProps";
import startDownload from "../../Utils/StartDownload";

function Downloader(props: DownloaderProps) {
  const { setLatestList } = props;

  const [textInput, setTextInput] = useState<string>('');
  const [id, setId] = useState('');
  const [response, setResponse] = useState<null | Mp3Response>(null);
  const [disabled, setDisabled] = useState<boolean>(false);

  const notify = (message: string) => toast.error(message);
  const notifyDownloadStarted = (message: string) => toast(message);

  const clearData = () => {
    setDisabled(false);
    setTextInput('');
    setId('');
  }

  useEffect(() => {
    if (id) {
      notifyDownloadStarted("Download started! Please wait...");
      
      const fetchData = () => {
        let interval = setInterval(async function() {
          setDisabled(true);
          try {
            const res = await fetchMp3Request(id);
            
            if (res.status === 200 && res.data.status === "ok") {
              res.data.id = id;
              setResponse(res.data);
              clearInterval(interval);
              clearData();
            } else if (res.status === 200 && res.data.status === "fail") {
              notify('Invalid video link');
              clearInterval(interval);
              clearData();
            }
          } catch (error: any) {
            notify(error.message + ". Try again later");
            clearInterval(interval);
            clearData();
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
    <div id="downloader">
      <h1>CONVERT YOUTUBE VIDEOS TO MP3 FILES</h1>

      <Body
        textInput={textInput}
        setTextInput={setTextInput}
      />

      <DownloadBtn
        disabled={disabled}
        setId={setId}
        textInput={textInput}
        notify={notify}
        setTextInput={setTextInput}
      />
    </div>
  );
}

export default Downloader;