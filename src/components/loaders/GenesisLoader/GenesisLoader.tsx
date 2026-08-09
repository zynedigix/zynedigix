import { useEffect } from "react";
import { useLoaderStore } from "@/systems/loader/loader";

const GenesisLoader = () => {
  const progress = useLoaderStore((state) => state.progress);
  const setProgress = useLoaderStore((state) => state.setProgress);
  const finishLoading = useLoaderStore((state) => state.finishLoading);

  useEffect(() => {
    let value = 0;

    const timer = setInterval(() => {
      value += 2;

      setProgress(value);

      if (value >= 100) {
        clearInterval(timer);

        setTimeout(() => {
          finishLoading();
        }, 300);
      }
    }, 40);

    return () => clearInterval(timer);
  }, [finishLoading, setProgress]);

  return (
    <div className="genesis-loader">
      <h1>ZYNEDIGIX</h1>

      <p>{progress}%</p>
    </div>
  );
};

export default GenesisLoader;