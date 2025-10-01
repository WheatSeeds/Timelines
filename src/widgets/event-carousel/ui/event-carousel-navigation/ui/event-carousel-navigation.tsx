import classNames from "classnames";
import React, { RefObject } from "react";

import { SvgLeftArrowSmall } from "../../../../../shared/assets/icons/ui/left-arrow-small";
import { SvgRightArrowSmall } from "../../../../../shared/assets/icons/ui/right-arrow-small";
import PaginationButton from "../../../../../shared/ui/buttons/pagination-button/ui/pagination-button";
import { getClasses } from "./styles/get-classes";

type Props = {
  prevRef: RefObject<HTMLButtonElement | null>;
  nextRef: RefObject<HTMLButtonElement | null>;
};

const EventCarouselNavigation = ({ prevRef, nextRef }: Props) => {
  const classes = getClasses();
  return (
    <>
      <PaginationButton
        ref={prevRef}
        className={classNames(classes.cnBtn, classes.cnBtnPrev)}
        variant="secondary"
      >
        <SvgLeftArrowSmall />
      </PaginationButton>

      <PaginationButton
        ref={nextRef}
        className={classNames(classes.cnBtn, classes.cnBtnNext)}
        variant="secondary"
      >
        <SvgRightArrowSmall />
      </PaginationButton>
    </>
  );
};

export default EventCarouselNavigation;
