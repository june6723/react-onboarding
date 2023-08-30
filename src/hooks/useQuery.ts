// type useQuery = <T>(url: string) => T

import { useCallback, useEffect, useState } from "react";

const useQuery = <T>(fetchUrl: string) => {
  const [data, setData] = useState<T>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<unknown>();

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const res = await fetch(fetchUrl);
      const data = await res.json();
      setData(data);
      setError(undefined);
      // return data;
    } catch (err) {
      setError(err);
      setData(undefined);
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
    // use(fetchData());
  }, []);

  return { data, isLoading, error, refetch: fetchData };
};

export default useQuery;

function use(promise: any) {
  if (promise.status === "fulfilled") {
    return promise.value;
  } else if (promise.status === "rejected") {
    throw promise.reason;
  } else if (promise.status === "pending") {
    throw promise;
  } else {
    promise.status = "pending";
    promise.then(
      (result: any) => {
        promise.status = "fulfilled";
        promise.value = result;
      },
      (reason: any) => {
        promise.status = "rejected";
        promise.reason = reason;
      }
    );
    throw promise;
  }
}
