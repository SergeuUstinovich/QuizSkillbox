import { SvgType } from "../../../types/SvgType";

export function StepSvg({ className }: SvgType) {
  return (
    <svg
      className={className}
      width="19"
      height="18"
      viewBox="0 0 19 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.5 9.75L7.5 12.75L15 5.25"
        stroke="#C9EB00"
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
