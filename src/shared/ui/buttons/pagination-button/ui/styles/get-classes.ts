import classNames from "classnames/bind";

import classes from "./pagination-button.module.scss";
const cn = classNames.bind(classes);
export const getClasses = () => {
  const cnRoot = cn("root");
  const cnContent = cn("content");
  const cnPrimary = cn("primary");
  const cnDot = cn("dot");
  const cnSecondary = cn("secondary");
  return {
    cnRoot,
    cnContent,
    cnPrimary,
    cnSecondary,
    cnDot,
  };
};
