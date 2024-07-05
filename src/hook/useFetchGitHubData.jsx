import { useEffect, useState } from "react";
import fetchDataFromGitHubApi from "../utils/api";

const useFetchGitHubData = (endpoint) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setData(null);
      setError(null);

      try {
        const result = await fetchDataFromGitHubApi(endpoint);
        setData(result);
      } catch (err) {
        setError("Something went wrong!");
      } finally {
        setLoading(false);
      }
    };

    if (endpoint) {
      fetchData();
    }
  }, [endpoint]);

  return { data, loading, error };
};

export default useFetchGitHubData;
