import classNames from "classnames/bind";

import classes from "./wheel.module.scss";
const cn = classNames.bind(classes);
export const getClasses = () => {
  const cnRoot = cn("root");
  const cnWheel = cn("wheel");
  const cnBtn = cn("btn");
  return {
    cnRoot,
    cnWheel,
    cnBtn,
  };
};
