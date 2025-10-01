import { gsap } from "gsap";
import React, { useEffect, useRef, useState } from "react";

interface AnimatedNumberProps {
  value: number;
  duration?: number;
  className?: string;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({
  value,
  duration = 1,
  className,
}) => {
  const [displayValue, setDisplayValue] = useState(value);
  const obj = useRef({ val: value });

  useEffect(() => {
    gsap.to(obj.current, {
      val: value,
      duration,
      ease: "power2.out",
      onUpdate: () => {
        setDisplayValue(Math.round(obj.current.val));
      },
    });
  }, [value, duration]);

  return <span className={className}>{displayValue}</span>;
};

export default AnimatedNumber;
