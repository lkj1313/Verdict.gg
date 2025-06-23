'use client';
import { useState } from 'react';

import BackButton from '@/shared/ui/navigation/BackButton';

import FileUploadSection from '@/feature/write/ui/FileUploadSection';
import PostEditorSection from '@/feature/write/ui/PostEditorSection';
import HashtagInputSection from '@/feature/write/ui/HashtagInputSection';
import SubmitButton from '@/feature/write/ui/SubmitButton';

const WritePage = () => {
  const [tab, setTab] = useState<'file' | 'thumbnail'>('file');

  return (
    <>
      <div className="flex flex-col gap-5">
        <div className="">
          {' '}
          <BackButton />{' '}
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            // 여기서 API 호출이나 상태 처리 등 수행
          }}
          className="flex flex-col gap-5"
        >
          <FileUploadSection tab={tab} setTab={setTab} />
          <PostEditorSection />
          <HashtagInputSection />
          <SubmitButton />
        </form>
      </div>
    </>
  );
};

export default WritePage;
