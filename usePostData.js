import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

function usePostData({
  api,
  method,
  destructure,
  key,
  params,
}) {
  const queryClient = useQueryClient()
  async function fn(data) {
    const res = await axios({ method: method, url: api, data, params });
    return res.data[destructure];
  }
  const { mutate } = useMutation({
    mutationFn:fn,
    onSuccess:()=>{
      queryClient.invalidateQueries({queryKey:[key]})
    }
  })

  return { mutate }
}

export default usePostData
