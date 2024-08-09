import React from "react";

export const ButtonBg = ({
  children,
  disabled,
  onClick,
  className,
  ...rest
}) => {
  return (
    <>
      <button
        className={`w-full ${
          disabled ? "" : ""
        } rounded-2xl items-center cursor-pointer justify-center inline-flex text-center text-white text-base font-medium leading-normal ${className}`}
        onClick={onClick}
        disabled={disabled}
        {...rest}
      >
        {children}
      </button>
    </>
  );
};
