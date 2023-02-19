import axios from "axios";

const requestOptions = {
  method: 'GET',
  url: import.meta.env.VITE_BAKCEND_URL + '/popular'
}

const fetchPopularRequest = async () => {
  const response = await axios.request(requestOptions);
  return response;
}

export { fetchPopularRequest };