const SkipCard = ({
  id,
  size,
  priceBeforeVat,
  hirePeriod,
  isSelected,
  onSelect,
}) => {
  return (
    <div
      onClick={() => onSelect(id)}
      className={`
        flex flex-col justify-between
        bg-white dark:bg-gray-800 
        border 
        rounded-lg 
        shadow-md 
        hover:shadow-lg 
        transition-shadow
        cursor-pointer
        p-4
        ${
          isSelected
            ? "border-blue-500 ring ring-blue-200"
            : "border-gray-200 dark:border-gray-700"
        }
      `}
    >
      <div className="w-full h-32 bg-gray-100 dark:bg-gray-700 rounded-md mb-4 flex items-center justify-center">
        <img
          src={`5skip.jpg`}
          alt={`${size} Yard Skip`}
          className="object-contain h-full"
        />
      </div>

      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
        {size} Yard Skip
      </h3>

      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
        {hirePeriod} day hire
      </p>

      <p className="mt-2 text-xl font-bold text-gray-900 dark:text-gray-100">
        £{priceBeforeVat}
      </p>

      {isSelected ? (
        <button
          disabled
          className="mt-4 w-full px-4 py-2 bg-blue-500 text-white font-medium rounded-lg"
        >
          Selected
        </button>
      ) : (
        <button
          onClick={() => onSelect(id)}
          className="mt-4 w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition"
        >
          Select
        </button>
      )}
    </div>
  );
};

export default SkipCard;
