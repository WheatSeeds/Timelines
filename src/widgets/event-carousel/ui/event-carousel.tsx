import "swiper/css";
import "swiper/css/navigation";

import React, { useRef } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { IEvent } from "../../../entities/event/types/types";
import EventBlock from "../../../entities/event/ui/event-block";
import { useAnimatedItems } from "../utils/hooks/use-animated-slides";
import EventCarouselNavigation from "./event-carousel-navigation/ui/event-carousel-navigation";
import { getClasses } from "./styles/get-classes";

type EventCarouselProps = {
  items: IEvent[];
};

const EventCarousel = ({ items }: EventCarouselProps) => {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const { wrapperRef, renderedItems } = useAnimatedItems(items);
  const classes = getClasses();
  return (
    <div ref={wrapperRef} className={classes.cnRoot}>
      <EventCarouselNavigation prevRef={prevRef} nextRef={nextRef} />

      <Swiper
        spaceBetween={80}
        slidesPerView={3}
        modules={[Navigation]}
        navigation={true}
        onBeforeInit={(swiper) => {
          const nav = swiper.params.navigation as any;
          if (nav) {
            nav.prevEl = prevRef.current;
            nav.nextEl = nextRef.current;
          }
        }}
      >
        {renderedItems.map((item, index) => (
          <SwiperSlide key={index}>
            <EventBlock year={item.year} description={item.description} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default EventCarousel;
