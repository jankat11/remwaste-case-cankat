import { useRef, useEffect } from "react";
import {
  FaMapMarkerAlt,
  FaTrashAlt,
  FaCalendarAlt,
  FaCreditCard,
  FaTruck,
} from "react-icons/fa";
import { FaShield } from "react-icons/fa6";

const StepBar = ({ steps, currentStep }) => {
  const itemRefs = useRef([]);

  useEffect(() => {
    const el = itemRefs.current[currentStep];
    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [currentStep]);

  const IconComponents = [
    FaMapMarkerAlt,
    FaTrashAlt,
    FaTruck,
    FaShield,
    FaCalendarAlt,
    FaCreditCard,
  ];

  return (
    <ul className="steps scroll-container w-full max-w-7xl mx-auto min-w-2xl px-0 sm:px-4 lg:px-6 my-4 sm:mt-6">
      {steps.map((label, index) => {
        const isDone = index <= currentStep;
        const statusClass = isDone
          ? "step step-success"
          : "step text-neutral-content/55";
        const Icon = IconComponents[index];

        return (
          <li
            key={label}
            ref={(el) => (itemRefs.current[index] = el)}
            className={statusClass}
          >
            <span className="step-icon">
              <Icon
                size={15}
                className={!isDone && "text-neutral-content/55"}
              />
            </span>
            <div className="flex items-center mt-2">
              <p className="text-sm font-medium">{label}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default StepBar;
