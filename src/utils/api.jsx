import axios from "axios";

const BASE_URL = "https://api.github.com/users/";
const GITHUB_TOKEN = import.meta.env.VITE_APP_GITHUB_TOKEN;

const headers = {
  Authorization: "Bearer " + GITHUB_TOKEN,
  "X-GitHub-Api-Version": "2022-11-28",
};

const cache = {};

const generateCacheKey = (url, params) => {
  const paramStr = params ? JSON.stringify(params) : "";
  return `${url}?${paramStr}`;
};

const fetchDataFromGitHubApi = async (url, params) => {
  const cacheKey = generateCacheKey(url, params);

  if (cache[cacheKey]) {
    return cache[cacheKey];
  }

  try {
    const { data } = await axios.get(BASE_URL + url, { headers, params });

    cache[cacheKey] = data;

    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export default fetchDataFromGitHubApi;
