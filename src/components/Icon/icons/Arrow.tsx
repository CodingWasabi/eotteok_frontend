import React from 'react';

const Arrow = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="5" height="11" viewBox="0 0 5 11" fill="none" {...props}>
      <path
        d="M4.82834 0.215428C4.60025 -0.0718092 4.23251 -0.0718092 4.00442 0.215428L0.136157 5.08673C-0.0453857 5.31535 -0.0453857 5.68465 0.136157 5.91327L4.00442 10.7846C4.23251 11.0718 4.60025 11.0718 4.82834 10.7846C5.05644 10.4973 5.05644 10.0342 4.82834 9.747L1.45816 5.49707L4.833 1.24714C5.05644 0.965761 5.05644 0.496803 4.82834 0.215428Z"
        fill={props.color || 'white'}
      />
    </svg>
  );
};

export default Arrow;
