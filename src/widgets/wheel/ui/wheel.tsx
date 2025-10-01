import React from "react";

import data from "../../../shared/assets/data/timeline-data.json";
import PaginationButton from "../../../shared/ui/buttons/pagination-button/ui/pagination-button";
import TimelineNumbers from "../../timeline-numbers/ui/timeline-numbers";
import { useWheelAnimation } from "../utils/hooks/use-wheel-animation";
import { getClasses } from "./styles/get-classes";

type WheelProps = {
  limit: number;
  currentTimeline: number;
  setCurrentTimeline: (index: number) => void;
};

const Wheel = ({ limit, currentTimeline, setCurrentTimeline }: WheelProps) => {
  const classes = getClasses();
  const radius = 265;
  const { angles } = useWheelAnimation({ limit, currentTimeline, radius });

  const wheelItems = Array.from({ length: limit }, (_, i) => String(i + 1));

  return (
    <div className={classes.cnRoot}>
      <TimelineNumbers
        startYear={data.timelines[currentTimeline].startYear}
        endYear={data.timelines[currentTimeline].endYear}
      />
      <div className={classes.cnWheel}>
        {wheelItems.map((item, i) => {
          const rad = (angles[i] * Math.PI) / 180;
          const x = radius * Math.cos(rad) - 26;
          const y = radius * Math.sin(rad) - 26;

          return (
            <div
              key={i}
              style={{
                transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
              }}
              className={classes.cnBtn}
              id={`btn-${i}`}
            >
              <PaginationButton
                onClick={() => setCurrentTimeline(i)}
                variant={i === currentTimeline ? "primary" : "dot"}
              >
                {item}
              </PaginationButton>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Wheel;
