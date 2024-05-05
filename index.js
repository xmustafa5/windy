import { useMutation, useQuery } from "@tanstack/react-query";
import useGetData from "./useGetData";
import usePostData from "./usePostData";
function useWindy({
  api,
  method,
  destructure,
  enabled,
  key,
  params,
  specificKey,
}) {
  if (method === "get") {
    const { data, isLoading, isError } = useGetData({
      api,
      method,
      destructure,
      enabled,
      key,
      params,
      specificKey,
    });
    return { data, isLoading, isError };
  }
  console.log('first')
  if (method === "post" ||  method === "delete" ||   method === "put") {
    const { mutate } = usePostData({
      api,
      method,
      destructure,
      key,
      params,
    });
    return { mutate };
  }
}

export default useWindy;
