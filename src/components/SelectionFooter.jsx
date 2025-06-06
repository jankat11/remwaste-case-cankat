import React from "react";

const SelectionFooter = ({skips, selectedId}) => {
  return (
    <div
      className="
            mt-10 p-4 
            border
            rounded-lg
            fixed
            bottom-0
            bg-base-100
            w-full
            flex
            justify-center
          "
    >
      {(() => {
        const selectedSkip = skips.find(
          (skipItem) => skipItem.id === selectedId
        );
        return (
          <div className=" max-w-7xl sm:px-2 lg:px-4 xl:px-8 w-full">
            <h2 className="text-xl font-semibold text-text-base dark:text-text-dark">
              Selected: {selectedSkip.size} Yard Skip
            </h2>
            <p className="mt-1 text-text-secondary dark:text-text-secondaryDark">
              {selectedSkip.hire_period_days} days hire period • £
              {selectedSkip.price_before_vat}
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
          </div>
        );
      })()}
    </div>
  );
};

export default SelectionFooter;
