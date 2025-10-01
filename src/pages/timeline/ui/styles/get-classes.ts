import classNames from "classnames/bind";

import classes from "./timeline-page.module.scss";
const cn = classNames.bind(classes);
export const getClasses = () => {
  const cnRoot = cn("root");
  const cnTitle = cn("title");
  return {
    cnRoot,
    cnTitle,
  };
};
