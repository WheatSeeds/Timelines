import React from "react";

import { getClasses } from "./styles/get-classes";

const BackgroundLines = () => {
  const classes = getClasses();

  return (
    <div className={classes.cnLines}>
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className={classes.cnLine} />
      ))}
    </div>
  );
};

export default BackgroundLines;
