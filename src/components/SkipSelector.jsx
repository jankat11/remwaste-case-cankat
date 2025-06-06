import { useEffect, useState } from "react";
import SkipCard from "./SkipCard";
import SkipFooterActions from "./SkipFooterActions";

const SkipSelector = () => {
  const [skips, setSkips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedId, setSelectedId] = useState(null);

  const API_URL =
    "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft";

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
        setLoading(false);
      }
    };
    fetchSkips();
  }, []);

  const handleSelect = (id) => {
    if (selectedId !== id) {
      setSelectedId(id);
    } else {
      setSelectedId(null);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-10">
        <span className="text-text-secondary dark:text-text-secondaryDark">
          Loading...
        </span>
      </div>
    );
  }
  if (error) {
    return (
      <div className="flex justify-center items-center py-10">
        <span className="text-error">Error: {error}</span>
      </div>
    );
  }

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-text-base dark:text-text-dark">
            Choose Your Skip Size
          </h1>
          <p className="mt-2 text-text-secondary dark:text-text-secondaryDark">
            Select the skip size that best suits your needs
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {skips.map((skip) => (
            <SkipCard
              key={skip.id}
              id={skip.id}
              size={skip.size}
              priceBeforeVat={skip.price_before_vat}
              hirePeriod={skip.hire_period_days}
              isSelected={selectedId === skip.id}
              onSelect={handleSelect}
            />
          ))}
        </div>
      </div>
      {selectedId && (
        <SkipFooterActions skips={skips} selectedId={selectedId} />
      )}
    </>
  );
};

export default SkipSelector;
