import React from 'react';

const Pencil = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none" {...props}>
      <path
        d="M3.25 18.6875V22.75H7.3125L19.2942 10.7683L15.2317 6.70583L3.25 18.6875ZM6.41333 20.5833H5.41667V19.5867L15.2317 9.77167L16.2283 10.7683L6.41333 20.5833ZM22.4358 6.09917L19.9008 3.56417C19.6842 3.3475 19.4133 3.25 19.1317 3.25C18.85 3.25 18.5792 3.35833 18.3733 3.56417L16.3908 5.54667L20.4533 9.60917L22.4358 7.62667C22.8583 7.20417 22.8583 6.52167 22.4358 6.09917Z"
        fill="#3FC06E"
      />
    </svg>
  );
};

export default Pencil;
