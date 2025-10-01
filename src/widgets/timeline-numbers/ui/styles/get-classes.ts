import classNames from "classnames/bind";

import classes from "./timeline-number.module.scss";
const cn = classNames.bind(classes);
export const getClasses = () => {
  const cnRoot = cn("root");
  const cnYear = cn("year");
  const cnStartYear = cn("startYear");
  const cnEndYear = cn("endYear");
  return {
    cnRoot,
    cnYear,
    cnStartYear,
    cnEndYear,
  };
};
