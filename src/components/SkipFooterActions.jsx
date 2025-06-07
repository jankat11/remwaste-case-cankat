import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";

const SkipFooterActions = ({ skips, selectedId, setSelectedId }) => {
  const selectedSkip = skips.find((si) => si.id === selectedId);

  return (
    <motion.div
      id="skip-actions"
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "100%" }}
      transition={{ type: "tween", duration: 0.3 }}
      className="
        mt-10 border-t border-t-base-content/50 fixed bottom-0 bg-base-100
        w-full flex justify-center z-50 ${}
      "
    >
      <div className="bg-base-200 w-full h-full p-4">
        <div className="max-w-7xl sm:px-2 lg:px-4 xl:px-8 w-full flex flex-col sm:items-end items-center">
          <div className="w-full sm:w-fit">
            <h2 className="text-xl font-semibold text-text-base">
              Selected: {selectedSkip.size} Yard Skip
            </h2>
            <p className="mt-1 text-text-secondary">
              {selectedSkip.hire_period_days} day hire period • £
              {selectedSkip.price_before_vat}
            </p>
            <div className="mt-3 flex space-x-3">
              <button
                onClick={() => setSelectedId(null)}
                className="px-4 py-2  flex-1 btn bg-base-content/5  text-text-base rounded-xl transition"
              >
                Back
              </button>
              <button
                onClick={() => alert("Continue clicked!")}
                className="px-6 py-2 flex-1 btn btn-warning hover:bg-primary-focus flex items-center gap-1 font-medium rounded-xl shadow-none transition"
              >
                <p>Continue</p> <FaArrowRight />
              </button>
            </div>
          </div>
      </div>
      </div>
    </motion.div>
  );
};

export default SkipFooterActions;
