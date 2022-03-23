import React, { useEffect, useState } from 'react';

const useDetectOutsideClick: any = (el: React.RefObject<HTMLDivElement>, initialState: boolean) => {
  const [isActive, setIsActive] = useState<boolean>(initialState);

  useEffect(() => {
    const pageClickEvent = (e: Event) => {
      if (el.current && !el.current.contains(e.target as Node)) {
        setIsActive((prev: boolean) => !prev);
      }
    };

    if (isActive) {
      window.addEventListener('click', pageClickEvent);
    }

    return () => {
      window.removeEventListener('click', pageClickEvent);
    };
  }, [isActive, el]);

  return [isActive, setIsActive];
};

export default useDetectOutsideClick;
