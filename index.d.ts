import { MutationOptions } from "@tanstack/react-query";
import useGetData, { GetDataResult } from "./useGetData";
import usePostData, { PostDataResult } from "./usePostData";

interface UseWindyOptions {
  api: string;
  method: "get" | "post" | "delete" | "put";
  destructure?: boolean;
  enabled?: boolean;
  key?: string;
  params?: Record<string, any>;
  specificKey?: string | (string | number)[];
}

interface UseWindyResult {
  data?: any;
  isLoading: boolean;
  isError: boolean;
  mutate?: (options?: MutationOptions<any, unknown, any, any>) => Promise<any>;
}

function useWindy({
  api,
  method,
  destructure,
  enabled,
  key,
  params,
  specificKey,
}: UseWindyOptions): UseWindyResult {
  if (method === "get") {
    const { data, isLoading, isError } = useGetData({
      api,
      method,
      destructure,
      enabled,
      key,
      params,
      specificKey,
    }) as GetDataResult;
    return { data, isLoading, isError };
  }
  if (method === "post" || method === "delete" || method === "put") {
    const { mutate } = usePostData({
      api,
      method,
      destructure,
      key,
      params,
    }) as PostDataResult;
    return { mutate };
  }

  // In case of invalid method, return empty result
  return { isLoading: false, isError: false };
}

export default useWindy;
