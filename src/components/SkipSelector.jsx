import { useEffect, useState } from "react";
import SkipCard from "./SkipCard";
import SkipFooterActions from "./SkipFooterActions";
import { AnimatePresence } from "framer-motion";
import { imagesBySize } from "../data/skipsImages";

const SkipSelector = () => {
  const [skips, setSkips] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedId, setSelectedId] = useState(null);

  const PLACEHOLDER_COUNT = 6;
  const placeholderArray = Array.from(
    { length: PLACEHOLDER_COUNT },
    (_, i) => i
  );

  const API_URL =
    import.meta.env.VITE_API_URL ??
    "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft";

    /* 
    chore: add fallback URL so repo runs without .env
    ------------------------------------------------------
    In a real project this URL would stay in .env, but for this case study
    I’ve included the public endpoint directly so reviewers can clone & run
    without extra setup. No functional logic changed. 
    */

  useEffect(() => {
    const fetchSkips = async () => {
      try {
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error("Network response was not ok");
        const data = await res.json();
        setSkips(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchSkips();
  }, []);

  useEffect(() => {
    if (!isLoading && skips.length > 0) {
      const stored = localStorage.getItem("selectedSkipId");
      if (stored) {
        const id = Number(stored);
        if (skips.some((s) => s.id === id)) {
          setSelectedId(id);
        }
      }
    }
  }, [isLoading, skips]);

  const handleSelect = (id) => {
    if (selectedId !== id) {
      setSelectedId(id);
      localStorage.setItem("selectedSkipId", id);
    } else {
      setSelectedId(null);
      localStorage.removeItem("selectedSkipId");
    }
  };

  if (error) {
    return (
      <div className="flex justify-center items-center py-10">
        <span className="text-error">Error: {error}</span>
      </div>
    );
  }

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:pb-40 pb-56">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-text-base dark:text-text-dark">
            Choose Your Skip Size
          </h1>
          <p className="mt-2 text-text-secondary dark:text-text-secondaryDark">
            Select the skip size that best suits your needs
          </p>
        </div>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {!isLoading
            ? skips.map((skip) => (
                <SkipCard
                  key={skip.id}
                  id={skip.id}
                  isLoading={isLoading}
                  size={skip.size}
                  priceBeforeVat={skip.price_before_vat}
                  hirePeriod={skip.hire_period_days}
                  isSelected={selectedId === skip.id}
                  imageSrc={imagesBySize[skip.size]}
                  onSelect={handleSelect}
                  allowedOnRoad={skip.allowed_on_road}
                />
              ))
            : placeholderArray.map((skip) => (
                <SkipCard key={skip} isLoading={isLoading} />
              ))}
        </div>
      </div>
      <AnimatePresence>
        {selectedId && (
          <SkipFooterActions
            key="skip-footer"
            skips={skips}
            selectedId={selectedId}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default SkipSelector;
