interface Mp3Response {
    duration: number;
    link: string;
    msg: string;
    progress: number;
    status: string;
    title: string;
    // Added manually
    id: string;
}

export default Mp3Response;