import axios from "axios";

const requestOptions = {
  method: 'GET',
  url: import.meta.env.VITE_BAKCEND_URL + '/video',
  params: {},
}

const fetchMp3Request = async (id: string) => {
  requestOptions.params = { id };
  const response = await axios.request(requestOptions);
  console.log(response);
  return response;
}

export { fetchMp3Request };