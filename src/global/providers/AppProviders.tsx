import { ReactNode } from "react";

import ChakraProvider from "./CkakraProvider";

interface AppRpovidersProps {
  children: ReactNode;
}
function AppRpoviders({ children }: AppRpovidersProps) {
  return <ChakraProvider>{children}</ChakraProvider>;
}

export default AppRpoviders;
