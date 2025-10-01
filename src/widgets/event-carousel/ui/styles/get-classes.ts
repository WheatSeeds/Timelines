import classNames from "classnames/bind";

import classes from "./event-carousel.module.scss";
const cn = classNames.bind(classes);
export const getClasses = () => {
  const cnRoot = cn("root");
  return {
    cnRoot,
  };
};
