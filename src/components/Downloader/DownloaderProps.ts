import LatestDownloadSong from "../LatestDownloads/LatestDownloadSong";

interface DownloaderProps {
    setLatestList(latestList: LatestDownloadSong[]): void;
}

export default DownloaderProps;