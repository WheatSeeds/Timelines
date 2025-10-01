import classNames from "classnames/bind";

import classes from "./event.module.scss";
const cn = classNames.bind(classes);
export const getClasses = () => {
  const cnRoot = cn("event");
  const cnTitle = cn("title");
  const cnDescription = cn("description");

  return {
    cnRoot,
    cnTitle,
    cnDescription,
  };
};
