import classNames from "classnames";
import React, { ButtonHTMLAttributes, forwardRef, ReactNode } from "react";

import { getClasses } from "./styles/get-classes";

type PaginationButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: "primary" | "secondary" | "dot";
  children?: string | ReactNode;
  className?: string;
};

const PaginationButton = forwardRef<HTMLButtonElement, PaginationButtonProps>(
  ({ variant, children, className, ...props }, ref) => {
    const classes = getClasses();
    return (
      <button
        ref={ref}
        className={classNames(
          classes.cnRoot,
          variant === "primary"
            ? classes.cnPrimary
            : variant === "dot"
              ? classes.cnDot
              : classes.cnSecondary,
          className,
        )}
        {...props}
      >
        {children}
      </button>
    );
  },
);

export default PaginationButton;
