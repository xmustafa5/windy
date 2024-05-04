import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

function useGetData({
  api,
  method,
  destructure,
  enabled,
  key,
  params,
  specificKey,
}) {
  async function fn() {
    const res = await axios({ method: method, url: api, params });
    return res.data[destructure];
  }
  let keyQuey = [key, specificKey];
  if (specificKey) {
    keyQuey = [key, specificKey];
  } else {
    keyQuey = [key];
  }

  const { data, isLoading, isError } = useQuery({
    queryKey: keyQuey,
    queryFn: fn,
    enabled: enabled,
  });


  return { data, isLoading, isError }
}

export default useGetData
