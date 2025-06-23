'use client';
import { useEffect, useState } from 'react';

export function useIsMobile(xs = 480) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => {
      setIsMobile(window.innerWidth < xs);
    };
    check();

    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, [xs]);

  return isMobile;
}
