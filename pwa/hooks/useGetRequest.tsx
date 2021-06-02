import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

const useRequest = (url) => {
  const { data, error } = useSWR(url, fetcher);

  return {
    data,
    error,
  };
};

export default useRequest;
