export const InfoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={25} height={24} fill="none" {...props}>
      <mask
        id="a"
        width={21}
        height={22}
        x={2}
        y={1}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "alpha",
        }}
      >
        <path
          fill="#4169E1"
          fillRule="evenodd"
          d="M23 1H2v22h21V1ZM11.25 8.25c0 .688.563 1.25 1.25 1.25.688 0 1.25-.563 1.25-1.25 0-.688-.563-1.25-1.25-1.25-.7 0-1.25.563-1.25 1.25ZM13.5 12a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0v-4Z"
          clipRule="evenodd"
        />
      </mask>
      <g mask="url(#a)">
        <path
          fill="#4169E1"
          stroke="#4169E1"
          strokeLinecap="round"
          strokeMiterlimit={10}
          strokeWidth={1.5}
          d="M12.5 21.25a9.25 9.25 0 1 0 0-18.5 9.25 9.25 0 0 0 0 18.5Z"
        />
      </g>
    </svg>
  );
};

export const WarnIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" {...props}>
      <mask
        id="a"
        width={22}
        height={21}
        x={1}
        y={1}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "alpha",
        }}
      >
        <path
          fill="#FFA500"
          fillRule="evenodd"
          d="M23 1H1v21h22V1ZM13 9a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0V9Zm-1 9.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"
          clipRule="evenodd"
        />
      </mask>
      <g mask="url(#a)">
        <path
          fill="#FFA500"
          stroke="#FFA500"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4.399 20.25a1 1 0 0 1-.887-1.462l7.601-14.586a1 1 0 0 1 1.774 0l7.601 14.586a1 1 0 0 1-.887 1.462H4.4Z"
        />
      </g>
    </svg>
  );
};
