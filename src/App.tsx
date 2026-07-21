import GenesisLoader from "@/components/loaders/GenesisLoader/GenesisLoader";
import { useLoaderStore } from "@/systems/loader/loader";

function App() {
  const isLoading = useLoaderStore((state) => state.isLoading);

  return (
    <>
      {isLoading ? (
        <GenesisLoader />
      ) : (
        <h1>PROJECT GENESIS</h1>
      )}
    </>
  );
}

export default App;