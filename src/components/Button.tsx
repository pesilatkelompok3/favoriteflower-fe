"use client";

type ButtonProps = {
  className: string;
};

const Button = ({
  className,
  children,
  clickHandler,
}: {
  className?: ButtonProps["className"];
  children?: React.ReactNode;
  clickHandler: (e?: React.MouseEvent) => void;
}) => {
  return (
    <button type="button" className={className} onClick={clickHandler}>
      {children}
    </button>
  );
};

export default Button;
