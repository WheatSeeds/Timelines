import { FC, SVGProps } from 'react';
export const SvgLeftArrowMobile: FC<SVGProps<SVGSVGElement>> = ({ color = 'currentColor', ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={6} height={8} fill="none" viewBox="0 0 6 8" {...props}>
    <path stroke="#42567A" strokeWidth={2} d="M4.749 1.042 1.624 4.167l3.125 3.125" />
  </svg>
);
