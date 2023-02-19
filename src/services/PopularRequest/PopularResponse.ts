interface PopularResponse {
    author: {
        name: string;
        channelID: string;
        url: string;
    };
    badges: Array<string>;
    bestThumbnail: {
        url: string;
        width: number;
        height: number;
    };
    duration: string;
    id: string;
    isLive: false;
    isUpcoming: false;
    title: string;
    uploadedAt: string;
    url: string;
    views: number;
}

export default PopularResponse;