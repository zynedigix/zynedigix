import { HelmetProvider } from "react-helmet-async";

import GenesisLoader from "@/components/loaders/GenesisLoader/GenesisLoader";
import AppRouter from "@/app/router/AppRouter";
import { useLoaderStore } from "@/systems/loader/loader";

function App() {
  const isLoading = useLoaderStore((state) => state.isLoading);

  return (
    <HelmetProvider>
      {isLoading ? <GenesisLoader /> : <AppRouter />}
    </HelmetProvider>
  );
}

export default App;