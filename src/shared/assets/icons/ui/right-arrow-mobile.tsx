import { FC, SVGProps } from 'react';
export const SvgRightArrowMobile: FC<SVGProps<SVGSVGElement>> = ({ color = 'currentColor', ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={7} height={8} fill="none" viewBox="0 0 7 8" {...props}>
    <path stroke="#42567A" strokeWidth={2} d="m1.584 1.042 3.125 3.125-3.125 3.125" />
  </svg>
);
