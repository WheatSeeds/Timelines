import React from "react";

import { IEvent } from "../types/types";
import { getClasses } from "./styles/get-classes";

const EventBlock = (data: IEvent) => {
  const classes = getClasses();
  return (
    <div className={classes.cnRoot}>
      <p className={classes.cnTitle}>{data.year}</p>
      <p className={classes.cnDescription}>{data.description}</p>
    </div>
  );
};

export default EventBlock;
