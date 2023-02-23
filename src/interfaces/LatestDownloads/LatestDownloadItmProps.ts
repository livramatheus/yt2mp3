import LatestDownloadSong from "./LatestDownloadSong";

interface LatestDownloadItmProps {
    title: string;
    id: string;
    setLatestList(latestList: LatestDownloadSong[]): void;
}

export default LatestDownloadItmProps;