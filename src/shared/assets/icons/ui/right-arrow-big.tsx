import { FC, SVGProps } from 'react';
export const SvgRightArrowBig: FC<SVGProps<SVGSVGElement>> = ({ color = 'currentColor', ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={10} height={14} fill="none" viewBox="0 0 10 14" {...props}>
    <path stroke="#42567A" strokeWidth={2} d="M1.5.75 7.75 7 1.5 13.25" />
  </svg>
);
