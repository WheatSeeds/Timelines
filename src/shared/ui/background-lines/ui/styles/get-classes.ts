import classNames from "classnames/bind";

import classes from "./background-lines.module.scss";
const cn = classNames.bind(classes);
export const getClasses = () => {
  const cnLines = cn("lines");
  const cnLine = cn("line");
  return {
    cnLines,
    cnLine,
  };
};
