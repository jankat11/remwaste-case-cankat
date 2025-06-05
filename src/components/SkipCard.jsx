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
        card 
        bg-base-100 
        shadow-sm 
        cursor-pointer 
        transition 
        hover:shadow-lg 
        rounded-lg 
        overflow-hidden
        ${
          isSelected
            ? "border-2 border-blue-500"
            : "border border-gray-200 dark:border-gray-700"
        }
      `}
    >
      <figure className="bg-gray-100 dark:bg-gray-700 h-40 flex items-center justify-center overflow-hidden">
        <img
          src={`5skip.jpg`}
          alt={`${size} Yard Skip`}
          className="object-cover"
        />
      </figure>
      <div className="card-body p-4">
        <h2 className="card-title text-gray-800 dark:text-gray-100">
          {size} Yard Skip
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {hirePeriod} day hire
        </p>
        <p className="mt-2 text-xl font-bold text-gray-900 dark:text-gray-100">
          £{priceBeforeVat}
        </p>
        <div className="card-actions justify-end mt-4">
          {isSelected ? (
            <button className="btn btn-primary btn-disabled w-full">
              Selected
            </button>
          ) : (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onSelect(id);
              }}
              className="btn btn-primary w-full hover:btn-primary-focus transition"
            >
              Select
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SkipCard;
