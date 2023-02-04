import axios from "axios";

const requestOptions = {
  method: 'GET',
  url: 'https://yt-2-mp3-back.cyclic.app/video',
  params: {},
}

const fetchMp3Request = async (id: string) => {
  requestOptions.params = { id };
  const response = await axios.request(requestOptions);
  return response;
}

export { fetchMp3Request };