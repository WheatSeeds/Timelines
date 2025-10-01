import React, { useState } from "react";

import BackgroundLines from "../../../shared/ui/background-lines/ui/background-lines";
import EventCarousel from "../../../widgets/event-carousel/ui/event-carousel";
import NavBar from "../../../widgets/nav-bar/ui/nav-bar";
import Wheel from "../../../widgets/wheel/ui/wheel";
import data from "./../../../shared/assets/data/timeline-data.json";
import { getClasses } from "./styles/get-classes";
const TimelinePage = () => {
  const classes = getClasses();
  const [currentTimeline, setCurrentTimeline] = useState(0);
  return (
    <div className={classes.cnRoot}>
      <BackgroundLines />
      <p className={classes.cnTitle}>Исторические даты</p>
      <Wheel
        currentTimeline={currentTimeline}
        setCurrentTimeline={setCurrentTimeline}
        limit={data.timelines.length}
      />
      <NavBar
        currentTimeline={currentTimeline}
        limit={data.timelines.length}
        setCurrentTimeline={setCurrentTimeline}
      />
      <EventCarousel items={data.timelines[currentTimeline].events} />
    </div>
  );
};

export default TimelinePage;
