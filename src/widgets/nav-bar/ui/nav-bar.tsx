import React from "react";

import { SvgLeftArrowBig } from "../../../shared/assets/icons/ui/left-arrow-big";
import { SvgRightArrowBig } from "../../../shared/assets/icons/ui/right-arrow-big";
import PaginationButton from "../../../shared/ui/buttons/pagination-button/ui/pagination-button";
import { getClasses } from "./styles/get-classes";

type NavBarProps = {
  currentTimeline: number;
  setCurrentTimeline: (newTimeline: number) => void;
  limit: number;
};

const NavBar = ({
  limit,
  currentTimeline,
  setCurrentTimeline,
}: NavBarProps) => {
  const classes = getClasses();

  const changeTimeline = (delta: number) => {
    setCurrentTimeline(
      Math.max(0, Math.min(limit - 1, currentTimeline + delta)),
    );
  };

  return (
    <div className={classes.cnRoot}>
      <p className={classes.cnCounter}>
        0{currentTimeline + 1}/0{limit}
      </p>
      <div className={classes.cnButtons}>
        <PaginationButton
          onClick={() => changeTimeline(-1)}
          variant={"primary"}
          disabled={currentTimeline === 0}
        >
          <SvgLeftArrowBig />
        </PaginationButton>
        <PaginationButton
          onClick={() => changeTimeline(1)}
          variant={"primary"}
          disabled={currentTimeline === limit - 1}
        >
          <SvgRightArrowBig />
        </PaginationButton>
      </div>
    </div>
  );
};

export default NavBar;
