import React from 'react';

const LogoPencil = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="64"
      height="67"
      viewBox="0 0 64 67"
      fill="none"
      {...props}
    >
      <rect x="45.2146" width="25.1695" height="67.1186" transform="rotate(42.3497 45.2146 0)" fill="url(#pattern0)" />
      <defs>
        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image0_89_561" transform="translate(-0.000754167) scale(0.00603318 0.00226244)" />
        </pattern>
        <image
          id="image0_89_561"
          width="166"
          height="442"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export default LogoPencil;