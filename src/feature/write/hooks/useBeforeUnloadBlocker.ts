// hooks/useBeforeUnloadBlocker.ts
import { useEffect } from 'react';

const useBeforeUnloadBlocker = () => {
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = ''; // 일부 브라우저에서 경고창 표시 위해 필요
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, []);
};

export { useBeforeUnloadBlocker };
