import React from "react";

const Input = React.forwardRef(
  (
    {
      label,
      labelClasses = "",
      type = "text",
      id,
      className = "",
      required = false,
      ...props
    },
    ref
  ) => {
    return (
      <>
        {label && (
          <label
            className={`mt-1 block ml-1 text-[#1ad1ff] ${labelClasses}`}
            htmlFor={id}
          >
            {label}
            {required && <span style={{ color: "red" }}>*</span>}
          </label>
        )}
        <input
          ref={ref}
          type={type}
          className={` px-3 py-1 bg-transparent  border border-[#20b2d6] rounded-lg  ${className}`}
          required={required}
          {...props}
          id={id}
        />
      </>
    );
  }
);

export default Input;
