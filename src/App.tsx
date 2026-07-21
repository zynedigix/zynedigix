import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";

import GenesisLoader from "@/components/loaders/GenesisLoader/GenesisLoader";
import AppRouter from "@/app/router/AppRouter";
import { useLoaderStore } from "@/systems/loader/loader";

function App() {
  const isLoading = useLoaderStore((state) => state.isLoading);

  return (
    <HelmetProvider>
      <BrowserRouter>
        {isLoading ? <GenesisLoader /> : <AppRouter />}
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;