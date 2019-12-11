import React from "react";

const Logo = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={ props.lg ? "124" : "74.399999"}
      height={ props.lg ? "174" : "104.39999" }
      viewBox="0 0 124 174"
    >
      <defs>
        <path
          id="b"
          d="M53.47 150.603L.5 104.5l52.97 46.103 51.991-48.141L53.97 1.42 24.5 52.5 53.969 1.42l51.492 101.042 1.039-.962-1.039.962 1.039 2.038-1.039-2.038-51.992 48.14zm0 0l-.97.897.97-.897 1.03.897-1.03-.897zM53.968 1.42L54.5.5l-.531.92L53.5.5l.469.92z"
        ></path>
        <filter
          id="a"
          width="124.8%"
          height="121%"
          x="-9.9%"
          y="-10.2%"
          filterUnits="objectBoundingBox"
        >
          <feMorphology
            in="SourceAlpha"
            operator="dilate"
            radius="4"
            result="shadowSpreadOuter1"
          ></feMorphology>
          <feOffset
            dx="2"
            dy="2"
            in="shadowSpreadOuter1"
            result="shadowOffsetOuter1"
          ></feOffset>
          <feMorphology
            in="SourceAlpha"
            radius="4"
            result="shadowInner"
          ></feMorphology>
          <feOffset
            dx="2"
            dy="2"
            in="shadowInner"
            result="shadowInner"
          ></feOffset>
          <feComposite
            in="shadowOffsetOuter1"
            in2="shadowInner"
            operator="out"
            result="shadowOffsetOuter1"
          ></feComposite>
          <feGaussianBlur
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
            stdDeviation="3"
          ></feGaussianBlur>
          <feColorMatrix
            in="shadowBlurOuter1"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.639177229 0"
          ></feColorMatrix>
        </filter>
      </defs>
      <g
        fill="none"
        fillRule="evenodd"
        stroke="none"
        strokeWidth="1"
        transform="translate(6 10)"
      >
        <g strokeLinecap="square">
          <use fill="#000" filter="url(#a)" xlinkHref="#b"></use>
          <use stroke="#333" strokeWidth="7" xlinkHref="#b"></use>
        </g>
        <rect width="57" height="7" x="24" y="104" fill="#333" rx="0.75"></rect>
        <rect
          width="34"
          height="8"
          x="49"
          y="76"
          fill="#09D3AC"
          rx="0.75"
          transform="rotate(90 66 80)"
        ></rect>
        <rect
          width="12"
          height="8"
          x="47"
          y="87"
          fill="#09D3AC"
          rx="0.75"
          transform="rotate(90 53 91)"
        ></rect>
        <rect
          width="18"
          height="8"
          x="30"
          y="84"
          fill="#09D3AC"
          rx="0.75"
          transform="rotate(90 39 88)"
        ></rect>
      </g>
    </svg>
  );
}

export default Logo;