import React from "react";

import { SvgLeftArrowBig } from "../../../shared/assets/icons/ui/left-arrow-big";
import { SvgLeftArrowMobile } from "../../../shared/assets/icons/ui/left-arrow-mobile";
import { SvgRightArrowBig } from "../../../shared/assets/icons/ui/right-arrow-big";
import { SvgRightArrowMobile } from "../../../shared/assets/icons/ui/right-arrow-mobile";
import { useIsMobile } from "../../../shared/hooks/use-is-mobile";
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
  const isMobile = useIsMobile(1440);

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
          variant="primary"
          disabled={currentTimeline === 0}
        >
          {isMobile ? <SvgLeftArrowMobile /> : <SvgLeftArrowBig />}
        </PaginationButton>
        <PaginationButton
          onClick={() => changeTimeline(1)}
          variant="primary"
          disabled={currentTimeline === limit - 1}
        >
          {isMobile ? <SvgRightArrowMobile /> : <SvgRightArrowBig />}
        </PaginationButton>
      </div>
      {isMobile && (
        <div className={classes.cnDots}>
          {Array.from({ length: limit }).map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentTimeline(idx)}
              className={
                idx === currentTimeline ? classes.cnDotActive : classes.cnDot
              }
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default NavBar;
