import { motion } from 'framer-motion';

const SkipFooterActions = ({ skips, selectedId, setSelectedId }) => {
  const selectedSkip = skips.find(si => si.id === selectedId);

  return (
    <motion.div
      initial={{ y: '100%' }}
      animate={{ y: 0 }}
      exit={{ y: '100%' }}
      transition={{ type: 'tween', duration: 0.3 }}
      className="
        mt-10 p-4 border rounded-lg fixed bottom-0 bg-base-100
        w-full flex justify-center z-50
      "
    >
      <div className="max-w-7xl sm:px-2 lg:px-4 xl:px-8 w-full">
        <h2 className="text-xl font-semibold text-text-base">
          Selected: {selectedSkip.size} Yard Skip
        </h2>
        <p className="mt-1 text-text-secondary">
          {selectedSkip.hire_period_days} days hire period • £
          {selectedSkip.price_before_vat}
        </p>

        <div className="mt-3 flex space-x-3">
          <button
            onClick={() => alert('Continue clicked!')}
            className="px-6 py-2 bg-primary hover:bg-primary-focus text-white font-medium rounded-lg transition"
          >
            Continue →
          </button>
          <button
            onClick={() => setSelectedId(null)}
            className="px-4 py-2 bg-secondary-lighter hover:bg-secondary text-text-base rounded-lg transition"
          >
            Back
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default SkipFooterActions;

