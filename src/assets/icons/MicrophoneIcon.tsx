import { SVGProps } from "react";
const MicrophoneIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    // xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#8696A0"
      d="M11.999 14.942c2.001 0 3.531-1.53 3.531-3.531V4.35c0-2.001-1.53-3.531-3.531-3.531-2.001 0-3.53 1.531-3.53 3.531v7.061c0 2.001 1.53 3.531 3.53 3.531Zm6.238-3.53c0 3.531-2.942 6.002-6.237 6.002s-6.237-2.471-6.237-6.002H3.761c0 4.001 3.178 7.297 7.061 7.885v3.884h2.354v-3.884c3.884-.588 7.061-3.884 7.061-7.885h-2Z"
    />
  </svg>
);
export default MicrophoneIcon;
