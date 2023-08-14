"use client";

type ButtonProps = {
  className: string;
  buttonType: "button" | "submit" | "reset";
};

const Button = ({
  className,
  children,
  clickHandler,
  buttonType,
}: {
  buttonType: ButtonProps["buttonType"];
  className?: ButtonProps["className"];
  children?: React.ReactNode;
  clickHandler?: (
    e?: React.MouseEvent | React.KeyboardEvent | React.FormEventHandler
  ) => void;
}) => {
  return (
    <button type={buttonType} className={className} onClick={clickHandler}>
      {children}
    </button>
  );
};

export default Button;
