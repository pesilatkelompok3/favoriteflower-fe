"use client";

import { FormEventHandler } from "react";

type ButtonProps = {
  className: string;
  buttonType: "button" | "submit" | "reset";
};

const Button = ({
  className,
  children,
  clickHandler,
  buttonType,
  submitHandler,
}: {
  buttonType: ButtonProps["buttonType"];
  className?: ButtonProps["className"];
  children?: React.ReactNode;
  submitHandler?: FormEventHandler<HTMLButtonElement>;
  clickHandler?: (
    e?:
      | React.MouseEvent
      | React.KeyboardEvent
      | React.FormEventHandler
      | FormEventHandler<HTMLButtonElement>
  ) => void;
}) => {
  return (
    <button
      type={buttonType}
      className={className}
      onClick={clickHandler}
      onSubmit={submitHandler}
    >
      {children}
    </button>
  );
};

export default Button;
