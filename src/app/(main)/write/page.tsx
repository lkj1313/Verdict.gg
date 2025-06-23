'use client';
import { useState } from 'react';
import { Button, Input } from '@/components/common';

import BackButton from '@/shared/ui/navigation/BackButton';
import { Monitor, Video } from 'lucide-react';
import Textarea from '@/components/common/Textarea';

const WritePage = () => {
  const [tab, setTab] = useState<'file' | 'thumbnail'>('file');
  return (
    <>
      <div className="flex flex-col gap-5">
        <div className="">
          {' '}
          <BackButton />{' '}
        </div>
        <section className="flex flex-col p-10 bg-white rounded-xl">
          <p className="font-bold text-primary">파일첨부</p>
          <div className="flex gap-2 p-5">
            <Button
              onClick={() => setTab('file')}
              variant="ghost"
              className={
                tab === 'file' ? 'text-primary font-semibold' : undefined
              }
            >
              {' '}
              <Video className="w-5 h-5" />
              파일 불러오기
            </Button>
            <Button
              onClick={() => setTab('thumbnail')}
              variant="ghost"
              className={
                tab === 'thumbnail' ? 'text-primary font-semibold' : undefined
              }
            >
              {' '}
              <Monitor className="w-5 h-5" />
              썸네일 업로드
            </Button>
          </div>
          <div className="border rounded-xl border-black  p-6 text-center text-gray-500 text-sm">
            📎 파일을 끌어오거나 클릭 후 업로드 하세요
          </div>
        </section>
        <section className="flex flex-col gap-5 p-10 bg-white rounded-xl">
          <p className="text-primary font-bold">글 작성</p>
          <div className="flex items-center gap-3">
            <p className="flex-shrink-0">제목</p>
            <Input
              className="border-black h-[50px] rounded-2xl"
              placeholder="제목을 입력해 주세요"
            ></Input>
          </div>

          <div className="">
            {/* 입력창 */}
            <Textarea
              placeholder="상황을 구체적으로 작성해주세요 (예: 어떤 장면인지, 어떤 판단을 받고 싶은지)"
              className="h-64"
            />
          </div>

          <p className="text-primary font-bold">해시태그</p>
          <Input
            className="border-black h-[50px] rounded-2xl"
            placeholder="해시태그를 입력해주세요"
          ></Input>
        </section>
      </div>
    </>
  );
};

export default WritePage;
