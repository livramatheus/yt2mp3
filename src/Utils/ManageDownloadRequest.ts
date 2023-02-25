import { toast } from 'react-toastify';

import { fetchMp3Request } from "../services/Mp3Request";
import Mp3Response from "../services/Mp3Request/Mp3Response";

interface ManageDownloadRequestParams {
  id: string;
  setId(id: string): void;
  setResponse(response: Mp3Response): void;
}

const manageDownloadRequest = (params: ManageDownloadRequestParams) => {
  const { id, setId, setResponse } = params;

  const notifyError = (message: string) => toast.error(message);
  const notifyDownloadStarted = (message: string) => toast(message);

  if (id) {
    notifyDownloadStarted("Download started! Please wait...");

    const fetchData = () => {
      let interval = setInterval(async function() {
        try {
          const res = await fetchMp3Request(id);
          
          if (res.status === 200 && res.data.status === "ok") {
            res.data.id = id;
            setResponse(res.data);
            clearInterval(interval);
            setId('');
          } else if (res.status === 200 && res.data.status === "fail") {
            notifyError('Invalid video link');
            clearInterval(interval);
            setId('');
          }
        } catch (error: any) {
          notifyError(error.message + ". Try again later");
          clearInterval(interval);
          setId('');
        }
      }, 2000);
    }
    fetchData();
  }
}

export default manageDownloadRequest;