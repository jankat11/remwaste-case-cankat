import { RiArrowRightSLine } from "react-icons/ri";
import { BsCheck, BsExclamationTriangle } from "react-icons/bs";
import { useRef, useEffect } from "react";
import { scrollToSkip } from "../utils/scrollUtils";
const SkipCard = ({
  id,
  size,
  priceBeforeVat,
  hirePeriod,
  isSelected,
  imageSrc,
  onSelect,
  isLoading,
  allowedOnRoad,
}) => {
  const skipCardRef = useRef();

  const handleClick = () => {
    if (isLoading) return;
    onSelect(id);
  };

  useEffect(() => {
    const el = skipCardRef.current;
    if (el && isSelected) {
      scrollToSkip(el)
    } 
  }, [isSelected])

  return (
    <div
      id={id}
      ref={skipCardRef}
      onClick={handleClick}
      className={`
        card bg-base-content/5     
        shadow-sm cursor-pointer      
        transition hover:shadow-md 
        hover:shadow-base-content/8
        rounded-xl overflow-hidden border-2   
        ${isSelected ? "border-warning" : "border-transparent"} 
      `}
    >
      <figure className="relative aspect-video flex items-center justify-center overflow-hidden">
        {isLoading ? (
          <div className="loading-skeleton w-full h-full"></div>
        ) : (
          <img
            src={imageSrc}
            alt={`${size} Yard Skip`}
            className="object-cover h-full w-full"
          />
        )}
        {!isLoading && (
          <span
            className={`
              absolute top-2 right-2
              bg-warning text-accent-content
              text-xs font-medium
              uppercase flex items-center leading-0
              px-2 py-3
              rounded-lg
              select-none pointer-events-none
            `}
          >
            {size} yd
          </span>
        )}
        {!isLoading && !allowedOnRoad && (
          <span
            className="
            absolute bottom-2 left-2
            bg-error-content/75 text-base-content
            text-xs font-medium leading-0
            px-3 py-2 rounded-lg
            flex items-center gap-2
            select-none pointer-events-none 
          "
          >
            <BsExclamationTriangle size={13.5} />
            <span>NOT ALLOWED ON THE ROAD</span>
          </span>
        )}
      </figure>

      <div className="card-body p-4">
        {isLoading ? (
          <div className="loading-skeleton h-6 w-1/2 mb-2"></div>
        ) : (
          <h2 className="card-title text-text-base">{size} Yard Skip</h2>
        )}
        {isLoading ? (
          <div className="loading-skeleton h-4 w-1/3 "></div>
        ) : (
          <p className="text-sm text-neutral-content/75">
            {hirePeriod} day hire period
          </p>
        )}
        {isLoading ? (
          <div className="loading-skeleton h-6 w-1/4 mt-3"></div>
        ) : (
          <p className="mt-2 text-xl font-bold text-text-base">
            £{priceBeforeVat}
          </p>
        )}
        <div className="card-actions justify-end mt-4">
          {isLoading ? (
            <div className="loading-skeleton h-10 w-full rounded-xl"></div>
          ) : isSelected ? (
            <button className="button-primary w-full ">
              <div className="flex items-center gap-1">
                <p>Selected</p>
                <BsCheck size={20} />
              </div>
            </button>
          ) : (
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleClick(id);
              }}
              className="button-secondary w-full "
            >
              <div className="flex justify-center items-center gap-1">
                <p>Select This Skip</p>
                <RiArrowRightSLine size={20} />
              </div>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SkipCard;
