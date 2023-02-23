import LatestDownloadSong from "../components/LatestDownloads/LatestDownloadSong";
import Mp3Response from "../services/Mp3Request/Mp3Response";

interface StartDownloadParams {
  response: Mp3Response | null;
  setLatestList(latestList: LatestDownloadSong[]): void;
}

const startDownload = (params: StartDownloadParams) => {
  const { response, setLatestList } = params;

  if (response) {
      window.location.href = response.link;
      
      const locStor = localStorage.getItem('latest');

      const curSong = {
        title: response.title,
        id: response.id
      }

      if (!locStor) {
        const songs = {
          songs: [curSong]
        }
        
        setLatestList(songs.songs);
        localStorage.setItem('latest', JSON.stringify(songs));
      } else {
        const parsed = JSON.parse(locStor);
        parsed.songs.push(curSong);
        setLatestList(parsed.songs);
        localStorage.setItem('latest', JSON.stringify(parsed));
      }
    }
}

export default startDownload;