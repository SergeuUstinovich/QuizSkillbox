import { SvgType } from "../../../types/SvgType";

export function MainSvg({ className }: SvgType) {
  return (
    <svg
      className={className}
      width="359"
      height="46"
      viewBox="0 0 359 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1_132)">
        <path
          d="M0 23.3075C0 14.4709 7.16344 7.30746 16 7.30746H89.75H134.625H146.122C153.214 7.30746 160.07 4.68698 166.745 2.29154C170.298 1.01665 174.651 0 179.5 0C184.349 0 188.702 1.01665 192.255 2.29154C198.93 4.68698 205.786 7.30746 212.878 7.30746H224.375H269.25H343C351.837 7.30746 359 14.4709 359 23.3075V46H0V23.3075Z"
          fill="white"
        />
        <circle cx="180" cy="12" r="4" fill="#4947FF" />
      </g>
      <defs>
        <clipPath id="clip0_1_132">
          <rect width="359" height="46" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
