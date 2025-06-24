'use client';
import { useState } from 'react';

import BackButton from '@/shared/ui/navigation/BackButton';

import {
  FileUploadSection,
  PostHashTagSection,
  SubmitButton,
} from '@/feature/write/ui';
import { useBeforeUnloadBlocker } from '@/feature/write/hooks';

const WritePage = () => {
  const [tab, setTab] = useState<'file' | 'thumbnail'>('file');

  useBeforeUnloadBlocker();
  return (
    <>
      <div className="flex flex-col gap-5">
        <BackButton />

        <form
          onSubmit={(e) => {
            e.preventDefault();
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
