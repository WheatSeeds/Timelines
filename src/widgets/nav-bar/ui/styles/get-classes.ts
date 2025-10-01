import classNames from "classnames/bind";

import classes from "./nav-bar.module.scss";
const cn = classNames.bind(classes);
export const getClasses = () => {
  const cnRoot = cn("root");
  const cnButtons = cn("buttons");
  const cnCounter = cn("counter");
  return {
    cnRoot,
    cnButtons,
    cnCounter,
  };
};
