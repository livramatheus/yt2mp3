import LatestDownloadSong from "./LatestDownloadSong";

interface LatestDownloadsProps {
    latestList: LatestDownloadSong[] | null;
    setLatestList(latestList: LatestDownloadSong[]): void;
}

export default LatestDownloadsProps;