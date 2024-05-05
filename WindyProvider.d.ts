import { ReactNode } from "react";
import { QueryClient, QueryClientProvider, QueryClientProviderProps } from "@tanstack/react-query";

// Define props interface for WindyProvider
interface WindyProviderProps {
  children: ReactNode;
}

// Export QueryClient and QueryClientProvider types for declaration merging
export { QueryClient, QueryClientProvider };

// Define d.ts for WindyProvider
declare function WindyProvider(props: WindyProviderProps): JSX.Element;

export default WindyProvider;
