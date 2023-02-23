interface LatestDownloadSong {
    title: string;
    id: string;
    setLatestList(latestList: LatestDownloadSong[]): void;
}

export default LatestDownloadSong;