'use client';
import { useState, useEffect } from 'react';

import BackButton from '@/shared/ui/navigation/BackButton';

import {
  FileUploadSection,
  PostHashTagSection,
  SubmitButton,
} from '@/feature/write/ui';

const WritePage = () => {
  const [tab, setTab] = useState<'file' | 'thumbnail'>('file');

  useEffect(() => {
    // 창 닫기, 새로고침 시 실행되는 함수
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault(); // 기본 동작 막음 (필수)
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    // 컴포넌트 unmount 시 이벤트 제거
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return (
    <>
      <div className="flex flex-col gap-5">
        <BackButton />

        <form
          onSubmit={(e) => {
            e.preventDefault();
            // 여기서 API 호출이나 상태 처리 등 수행
          }}
          className="flex flex-col gap-8"
        >
          <FileUploadSection tab={tab} setTab={setTab} />
          <PostHashTagSection />

          <SubmitButton />
        </form>
      </div>
    </>
  );
};

export default WritePage;
