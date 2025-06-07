import { RiArrowRightSLine } from "react-icons/ri";
import { BsCheck } from "react-icons/bs";
import { useRef } from "react";

const SkipCard = ({
  id,
  size,
  priceBeforeVat,
  hirePeriod,
  isSelected,
  onSelect,
}) => {
  const skipCardRef = useRef();

  const handleClick = () => {
    const el = skipCardRef.current;
    if (el && !isSelected) {
      onSelect(id);
      setTimeout(() => {
        const { top, bottom } = el.getBoundingClientRect();
        const vh = window.innerHeight || document.documentElement.clientHeight;
        const skipActionsEl = document.getElementById("skip-actions");
        const barHeight = skipActionsEl
          ? skipActionsEl.getBoundingClientRect().height
          : 0;
        if (top < 0) {
          window.scrollBy({ top: top - 16, behavior: "smooth" });
        } else if (bottom > vh - barHeight) {
          const overshoot = bottom - (vh - barHeight);
          window.scrollBy({ top: overshoot + 16, behavior: "smooth" });
        }
      }, 10);
    } else {
      onSelect(id);
    }
  };

  return (
    <div
      id={id}
      ref={skipCardRef}
      onClick={handleClick}
      className={`
        card
        bg-base-content/5
        shadow-sm 
        cursor-pointer 
        transition 
        hover:shadow-lg 
        rounded-xl 
        overflow-hidden
        ${isSelected ? "" : "     "}
      
      `}
    >
      <figure className=" aspect-w-16 aspect-h-9 flex items-center justify-center overflow-hidden">
        <img
          src={`5skip.jpg`}
          alt={`${size} Yard Skip`}
          className="object-cover h-full w-full"
        />
      </figure>
      <div className="card-body p-4">
        <h2 className="card-title text-text-base ">{size} Yard Skip</h2>

        <p className="text-sm">{hirePeriod} day hire</p>

        <p className="mt-2 text-xl font-bold text-text-base ">
          £{priceBeforeVat}
        </p>

        <div className="card-actions justify-end mt-4">
          {isSelected ? (
            <button className="btn btn-warning shadow-none w-full border-none rounded-xl">
              <div className="flex items-center gap-1">
                <p>Selected</p>
                <div className="relative">
                  <BsCheck size={20} />
                </div>
              </div>
            </button>
          ) : (
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleClick(id);
              }}
              className="btn bg-base-100 w-full text-shadow-none transition shadow-none border-none rounded-xl"
            >
              <div className="flex justify-center items-center gap-1 ">
                <p>Select This Skip</p>
                <div className="relative">
                  <RiArrowRightSLine size={20} />
                </div>
              </div>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SkipCard;
