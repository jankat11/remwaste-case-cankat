import { useEffect, useState } from "react";
import SkipCard from "./SkipCard";

const SkipSelector = () =>  {
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
        <span className="text-gray-500">Loading...</span>
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
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
          Choose Your Skip Size
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
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
        <div className="mt-10 p-4 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg">
          {(() => {
            const sel = skips.find((s) => s.id === selectedId);
            return (
              <>
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                  Selected: {sel.size} Yard Skip
                </h2>
                <p className="mt-1 text-gray-600 dark:text-gray-300">
                  {sel.hire_period_days} days hire period • £
                  {sel.price_before_vat}
                </p>

                <div className="mt-3">
                  <button
                    onClick={() => alert("Continue clicked!")}
                    className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg"
                  >
                    Continue →
                  </button>
                  <button
                    onClick={() => setSelectedId(null)}
                    className="ml-4 px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-lg"
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
}

export default SkipSelector