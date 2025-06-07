import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";

export default function SkipFooterActions({
  skips,
  selectedId,
  setSelectedId,
}) {
  const selectedSkip = skips.find((s) => s.id === selectedId);

  return (
    <motion.div
      id="skip-actions"
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "100%" }}
      transition={{ type: "tween", duration: 0.3 }}
      className="
        fixed bottom-0 w-full bg-gray-900 border-t-2 border-gray-700 text-white
        pb-[env(safe-area-inset-bottom)] z-50
      "
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center gap-4">
        <div className="order-1 w-full md:w-1/3">
          <h2 className="text-lg font-semibold">
            Selected: {selectedSkip.size} Yard Skip
          </h2>
          <p className="mt-1 text-sm text-gray-400">
            {selectedSkip.hire_period_days} day hire period &bull; £
            {selectedSkip.price_before_vat}
          </p>
        </div>
        <p className="order-2 w-full md:w-1/3 text-xs text-gray-500 md:max-w-md">
          Imagery and information shown throughout this website may not reflect
          the exact shape or size. Colours may vary; options/accessories may
          incur additional cost.
        </p>
        <div className="order-3 w-full md:w-1/3 flex flex-col sm:flex-row gap-2">
          <button
            onClick={() => setSelectedId(null)}
            className="
              w-full sm:w-auto
              py-3
              border border-gray-600
              rounded-lg
              text-gray-200
              hover:bg-gray-800
              transition
            "
          >
            Back
          </button>
          <button
            onClick={() => alert("Continue clicked!")}
            className="
              w-full sm:w-auto
              py-3
              bg-yellow-500
              hover:bg-yellow-600
              rounded-lg
              flex items-center justify-center gap-1
              font-medium
              transition
            "
          >
            Continue <FaArrowRight />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
