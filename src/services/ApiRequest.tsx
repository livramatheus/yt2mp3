import axios from "axios";

const requestOptions = {
  method: 'GET',
  url: 'https://youtube-mp36.p.rapidapi.com/dl',
  params: {},
  headers: {
    'X-RapidAPI-Key': 'fafea167f6msh4ab2ecc90e79ae2p1db2b0jsn5f6687582230',
    'X-RapidAPI-Host': 'youtube-mp36.p.rapidapi.com'
  },
}

const fetch = async (id: string) => {
  requestOptions.params = { id };
  const response = await axios.request(requestOptions);
  return response;
}

export { fetch };