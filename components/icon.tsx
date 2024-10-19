import { SVGProps } from "react";

export const Icon = ({ ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 256 256"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clip-path="url(#clip0_27_25)">
      <rect
        x="-105"
        y="255.652"
        width="148"
        height="148"
        transform="rotate(-45 -105 255.652)"
        fill="white"
      />
      <rect
        x="-82.4175"
        y="19.3696"
        width="72.6476"
        height="422.789"
        transform="rotate(-45 -82.4175 19.3696)"
        fill="white"
      />
      <rect
        x="377.957"
        y="-220"
        width="69.7474"
        height="438.215"
        transform="rotate(45 377.957 -220)"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_27_25">
        <rect width="256" height="256" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
