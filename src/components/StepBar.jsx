import { useRef, useEffect } from "react";
import {
  FaMapMarkerAlt,
  FaTrashAlt,
  FaBox,
  FaCheckCircle,
  FaCalendarAlt,
  FaCreditCard,
} from "react-icons/fa";

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

  const icons = [
    <FaMapMarkerAlt size={15} />,
    <FaTrashAlt size={15} />,
    <FaBox size={15} />,
    <FaCheckCircle size={15} />,
    <FaCalendarAlt size={15} />,
    <FaCreditCard size={15} />,
  ];

  return (
    <ul className="steps scroll-container w-full max-w-7xl mx-auto min-w-2xl px-0 sm:px-4 lg:px-6 my-4">
      {steps.map((label, index) => {
        const statusClass = index <= currentStep ? "step step-success" : "step";

        return (
          <li
            key={label}
            ref={(el) => (itemRefs.current[index] = el)}
            className={statusClass}
          >
            <span className="step-icon">{icons[index]}</span>
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
