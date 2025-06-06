import React from "react";
import {
  FaMapMarkerAlt,
  FaTrashAlt,
  FaBox,
  FaCheckCircle,
  FaCalendarAlt,
  FaCreditCard,
} from "react-icons/fa";

const StepBar = ({ steps, currentStep }) => {
  const icons = [
    <FaMapMarkerAlt size={20} />, // Postcode
    <FaTrashAlt size={20} />, // Waste Type
    <FaBox size={20} />, // Select Skip
    <FaCheckCircle size={20} />, // Permit Check
    <FaCalendarAlt size={20} />, // Choose Date
    <FaCreditCard size={20} />, // Payment
  ];

  return (
    <div className="flex items-center justify-center mb-8 px-4 sm:px-0">
      {steps.map((label, idx) => (
        <React.Fragment key={label}>
          <div className="flex items-center">
            <div
              className={`
                w-8 h-8 rounded-full flex items-center justify-center
                ${
                  idx === currentStep
                    ? "bg-primary text-white"
                    : " text-text-secondary"
                }
              `}
            >
              {icons[idx]}
            </div>
            <span
              className={`
                mt-2 text-sm font-medium
                ${
                  idx === currentStep
                    ? "text-text-base "
                    : "text-text-secondary"
                }
              `}
            >
              {label}
            </span>
          </div>
          {idx < steps.length - 1 && <div className="flex-1 h-px mx-4  d" />}
        </React.Fragment>
      ))}
    </div>
  );
};

export default StepBar;
