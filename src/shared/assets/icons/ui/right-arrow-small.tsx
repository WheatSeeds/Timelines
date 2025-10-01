import { FC, SVGProps } from 'react';
export const SvgRightArrowSmall: FC<SVGProps<SVGSVGElement>> = ({ color = 'currentColor', ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={8} height={12} fill="none" viewBox="0 0 8 12" {...props}>
    <path stroke="#3877EE" strokeWidth={2} d="m1 1 5 5-5 5" />
  </svg>
);
