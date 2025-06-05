
import { useEffect, useState } from "react";
import SkipCard from "./SkipCard";

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
        <span className="text-red-500">Error: {error}</span>
      </div>
    );
  }

  return (
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
            onSelect={(id) => setSelectedId(id)}
          />
        ))}
      </div>

      {selectedId && (
        <div
          className="
            mt-10 p-4 
            bg-background 
            dark:bg-background-dark 
            border border-secondary-DEFAULT dark:border-secondary-darker 
            rounded-lg
          "
        >
          {(() => {
            const sel = skips.find((s) => s.id === selectedId);
            return (
              <>
                <h2 className="text-xl font-semibold text-text-base dark:text-text-dark">
                  Selected: {sel.size} Yard Skip
                </h2>
                <p className="mt-1 text-text-secondary dark:text-text-secondaryDark">
                  {sel.hire_period_days} days hire period • £
                  {sel.price_before_vat}
                </p>

                <div className="mt-3 flex space-x-3">
                  <button
                    onClick={() => alert("Continue clicked!")}
                    className="px-6 py-2 bg-primary hover:bg-primary-focus text-white font-medium rounded-lg transition"
                  >
                    Continue →
                  </button>
                  <button
                    onClick={() => setSelectedId(null)}
                    className="px-4 py-2 bg-secondary-lighter hover:bg-secondary DEFAULT text-text-base dark:text-text-dark rounded-lg transition"
                  >
                    Back
                  </button>
                </div>
              </>
            );
          })()}
        </div>
      )}
    </div>
  );
};

export default SkipSelector;
