import { SVGProps } from "react";
const SampleIcons = (props: SVGProps<SVGSVGElement>) => (
  <svg
    // xmlns="http://www.w3.org/2000/svg"
    width={164}
    height={36}
    fill="none"
    {...props}
  >
    <rect
      width={63}
      height={35}
      x={0.5}
      y={0.5}
      stroke="#8696A0"
      strokeOpacity={0.15}
      rx={17.5}
    />
    <path
      fill="#54656F"
      fillOpacity={0.85}
      d="M15.271 13.31C15 13.824 15 14.496 15 15.84v4.32c0 1.344 0 2.016.271 2.53.238.451.619.818 1.086 1.048.532.262 1.228.262 2.62.262h6.133c1.392 0 2.088 0 2.62-.262.468-.23.848-.597 1.086-1.048.271-.514.271-1.186.271-2.53v-4.32c0-1.344 0-2.016-.27-2.53a2.445 2.445 0 0 0-1.087-1.048C27.198 12 26.502 12 25.11 12h-6.132c-1.393 0-2.089 0-2.62.262-.468.23-.849.597-1.087 1.048ZM30.73 15.608a.788.788 0 0 0-.267.59v3.605c0 .223.097.437.268.589l2.226 1.975c.53.471 1.39.108 1.39-.589v-7.556c0-.697-.86-1.06-1.39-.589l-2.226 1.975ZM44.93 16.667 47 18.783l2.117-2.116.644.644L47 20.07l-2.76-2.76.69-.644Z"
    />
    <path
      fill="#AEBAC1"
      d="M105.9 20.3h-.9l-.3-.3c1-1.1 1.6-2.7 1.6-4.3 0-3.7-3-6.7-6.7-6.7S93 12 93 15.7s3 6.7 6.7 6.7c1.6 0 3.2-.6 4.3-1.6l.3.3v.8l5.1 5.1 1.5-1.5-5-5.2Zm-6.2 0c-2.6 0-4.6-2.1-4.6-4.6 0-2.5 2.1-4.6 4.6-4.6 2.5 0 4.6 2.1 4.6 4.6 0 2.5-2 4.6-4.6 4.6ZM152 13a2 2 0 1 0-.001-4.001A2 2 0 0 0 152 13Zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 152 15Zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 152 21Z"
    />
  </svg>
);
export default SampleIcons;
