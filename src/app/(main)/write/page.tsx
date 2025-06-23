'use client';
import { useState } from 'react';

import BackButton from '@/shared/ui/navigation/BackButton';

import {
  FileUploadSection,
  PostHashTagSection,
  SubmitButton,
} from '@/feature/write/ui';

const WritePage = () => {
  const [tab, setTab] = useState<'file' | 'thumbnail'>('file');

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
