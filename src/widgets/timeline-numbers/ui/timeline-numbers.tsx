import classNames from "classnames";
import React from "react";

import AnimatedNumber from "../../animated-number/ui/animated-number";
import { getClasses } from "./styles/get-classes";

type TimelineNumberProps = {
  startYear: number;
  endYear: number;
};

const TimelineNumbers = ({ startYear, endYear }: TimelineNumberProps) => {
  const classes = getClasses();
  return (
    <div className={classes.cnRoot}>
      <AnimatedNumber
        value={startYear}
        className={classNames(classes.cnStartYear, classes.cnYear)}
      />
      <AnimatedNumber
        value={endYear}
        className={classNames(classes.cnEndYear, classes.cnYear)}
      />
    </div>
  );
};

export default TimelineNumbers;
