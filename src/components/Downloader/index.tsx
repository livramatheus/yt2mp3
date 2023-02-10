import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import Body from "../Body";
import DownloadBtn from "../DownloadBtn";
import { fetchMp3Request } from "../../services/Mp3Request";
import Mp3Response from "../../services/Mp3Request/Mp3Response";

function Downloader() {
  const [textInput, setTextInput] = useState<string>('');
  const [id, setId] = useState('');
  const [response, setResponse] = useState<null | Mp3Response>(null);
  const [disabled, setDisabled] = useState<boolean>(false);

  const notify = (message: string) => toast.error(message);

  const clearData = () => {
    setDisabled(false);
    setTextInput('');
    setId('');
  }

  useEffect(() => {
    if (id) {
      const fetchData = () => {
        let interval = setInterval(async function() {
          setDisabled(true);
          try {
            const res = await fetchMp3Request(id);
            
            if (res.status === 200 && res.data.status === "ok") {
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
    if (response) {
      window.location.href = response.link;
    }
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

      <ToastContainer
        autoClose={3000}
        theme="dark"
      />
    </div>
  );
}

export default Downloader;