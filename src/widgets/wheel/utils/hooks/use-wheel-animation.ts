import { gsap } from "gsap";
import { useEffect, useState } from "react";

type UseWheelAnimationProps = {
  limit: number;
  currentTimeline: number;
  radius: number;
};

export const useWheelAnimation = ({
  limit,
  currentTimeline,
  radius,
}: UseWheelAnimationProps) => {
  const [angles, setAngles] = useState<number[]>(
    Array.from({ length: limit }, (_, i) => (i * 360) / limit),
  );

  const angleDistance = (from: number, to: number) => {
    let diff = Math.abs((to - from) % 360);
    if (diff > 180) diff = 360 - diff;
    return diff;
  };

  const animateRotation = (newAngles: number[]) => {
    angles.forEach((startAngle, i) => {
      const targetAngle = newAngles[i];
      const diff = angleDistance(startAngle, targetAngle);

      const duration = 1 + (diff / 60 - 1) * 0.5;

      gsap.to(
        { angle: startAngle },
        {
          angle: targetAngle,
          duration,
          ease: "power2.inOut",
          onUpdate: function () {
            const rad = (this.targets()[0].angle * Math.PI) / 180;
            const x = radius * Math.cos(rad) - 26;
            const y = radius * Math.sin(rad) - 26;

            gsap.set(`#btn-${i}`, { x, y });
          },
        },
      );
    });

    setAngles(newAngles);
  };

  useEffect(() => {
    const selectedAngle = angles[currentTimeline];
    const offset = -60;
    const delta = offset - selectedAngle;
    const newAngles = angles.map((angle) => angle + delta);
    animateRotation(newAngles);
  }, [currentTimeline]);

  return { angles };
};
