import "../shared/assets/styles/app.scss";

import classNames from "classnames";
import React from "react";

import TimelinePage from "../pages/timeline/ui/timeline-page";
import { getClasses } from "./styles/get-classes";

function App() {
  const classes = getClasses();
  return (
    <div className={classNames("App", classes.cnRoot)}>
      <TimelinePage />
    </div>
  );
}

export default App;
