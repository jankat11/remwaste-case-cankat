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
        bg-base-content/5
        shadow-sm 
        cursor-pointer 
        transition 
        hover:shadow-lg 
        rounded-lg 
        overflow-hidden
        ${isSelected ? "" : "     "}
      `}
    >
      <figure className=" h-40 flex items-center justify-center overflow-hidden">
        <img
          src={`5skip.jpg`}
          alt={`${size} Yard Skip`}
          className="object-cover h-full w-full"
        />
      </figure>
      <div className="card-body p-4">
        <h2 className="card-title text-text-base ">{size} Yard Skip</h2>

        <p className="text-sm ">{hirePeriod} day hire</p>

        <p className="mt-2 text-xl font-bold text-text-base ">
          £{priceBeforeVat}
        </p>

        <div className="card-actions justify-end mt-4">
          {isSelected ? (
            <button className="btn btn-warning shadow-none w-full">
              Selected
            </button>
          ) : (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onSelect(id);
              }}
              className="btn bg-base-100 w-full transition shadow-none border-none"
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
