import { UseMutationResult, UseQueryResult } from "@tanstack/react-query";

export interface UseWindyOptions {
  api: string;
  method: "get" | "post" | "delete" | "put";
  destructure?: boolean;
  enabled?: boolean;
  key?: string;
  params?: Record<string, any>;
  specificKey?: string | (number | string)[];
}

export interface UseWindyResult {
  data?: any;
  isLoading: boolean;
  isError: boolean;
  mutate?: UseMutationResult<any, unknown, any, any>["mutate"];
}

declare function useWindy(options: UseWindyOptions): UseWindyResult;

export default useWindy;
