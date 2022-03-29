import { useEffect } from 'react';

const useWarngingExit = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    window.onbeforeunload = () => {
      return 0;
    };

    return () => {
      window.onbeforeunload = null;
    };
  }, []);
};

export default useWarngingExit;
