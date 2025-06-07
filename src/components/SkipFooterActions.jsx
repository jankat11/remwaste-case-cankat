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
        fixed bottom-0 w-full bg-base-300 border-t-2 border-base-content/20 text-base-content
        pb-[env(safe-area-inset-bottom)] z-50
      "
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  py-4 flex flex-col md:flex-row items-center gap-4">
        <div className="order-1 w-full md:w-1/3">
          <h2 className="text-lg font-semibold">
            Selected: {selectedSkip.size} Yard Skip
          </h2>
          <p className="mt-1 text-sm text-base-content/60">
            {selectedSkip.hire_period_days} day hire period &bull; £
            {selectedSkip.price_before_vat}
          </p>
        </div>
        <p className="order-2 w-full md:w-1/3 text-xs leading-4.5 text-base-content/45 md:max-w-md">
          Imagery and information shown throughout this website may not reflect
          the exact shape or size. Colours may vary; options/accessories may
          incur additional cost.
        </p>
        <div className="order-3 w-full md:w-1/3 flex sm:flex-row gap-2">
          <button
            onClick={() => setSelectedId(null)}
            className="
              button-secondary
              w-full sm:w-auto
              transition
              flex-1
              min-w-[calc(50%_-_4px)]
            "
          >
            Back
          </button>
          <button
            onClick={() => alert("Continue clicked!")}
            className="
              button-primary
              w-full sm:w-auto
              flex items-center justify-center gap-1
              transition
              flex-1
            "
          >
            Continue <FaArrowRight />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
