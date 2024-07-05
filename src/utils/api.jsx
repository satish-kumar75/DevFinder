import axios from "axios";

const BASE_URL = "https://api.github.com/users";

const cache = {};

const fetchDataFromGitHubApi = async (endpoint) => {
  if (cache[endpoint]) {
    return cache[endpoint];
  }

  try {
    const { data } = await axios.get(`${BASE_URL}/${endpoint}`);
    cache[endpoint] = data;
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default fetchDataFromGitHubApi;
