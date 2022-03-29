import React from 'react';

const FilledArrow = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="5" viewBox="0 0 10 5" fill="none" {...props}>
      <path d="M0 0L5 5L10 0H0Z" fill="#8E8E93" />
    </svg>
  );
};

export default FilledArrow;
