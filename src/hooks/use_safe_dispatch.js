import { useLayoutEffect, useCallback, useRef } from 'react';

export default function useSafeDispatch(dispatch) {
  const mountedRef = useRef(false);

  useLayoutEffect(() => {
    mountedRef.current = true;

    return () => {
      mountedRef.current = false;
    };
  }, []);

  return useCallback(
    (...arg) => {
      if (mountedRef.current) {
        dispatch(...arg);
      }
    },
    [dispatch]
  );
}
