import { createContext } from "react";

export interface ErrorContextType {
  error: any;
  setError: (error: any) => void;
}

const ErrorContext = createContext<ErrorContextType>({
  error: undefined,
  setError: () => {},
});

export default ErrorContext;
