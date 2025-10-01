import classNames from "classnames/bind";

import classes from "./event-carousel-navigation.module.scss";
const cn = classNames.bind(classes);
export const getClasses = () => {
  const cnBtn = cn("btn");
  const cnBtnPrev = cn("btnPrev");
  const cnBtnNext = cn("btnNext");
  return {
    cnBtn,
    cnBtnPrev,
    cnBtnNext,
  };
};
