import { useState, useCallback } from "react";

/**
 * @author dougdb
 * @param {*} reqConf
 */
const useHttp = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  /**
   * @author dougdb
   */
  const sendRequest = /*async (taskText) => */ useCallback(
    async (reqConf, callBackDataRaw) => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(reqConf.url, {
          method: reqConf.method ? reqConf.method : "GET",
          headers: reqConf.headers ? reqConf.headers : {},
          body: reqConf.body ? JSON.stringify(reqConf.body) : null,
        });
        //
        if (!response.ok) {
          throw new Error("Request failed!");
        }

        const data = await response.json();
        //
        callBackDataRaw(data);
      } catch (err) {
        setError(err.message || "Something went wrong!");
      }
      setIsLoading(false);
    }, []);

  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useHttp;
