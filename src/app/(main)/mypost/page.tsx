import { Button } from '@/components/common';
import BackButton from '@/shared/ui/navigation/BackButton';
import Link from 'next/link';
import React from 'react';

const MyPostPage = () => {
  return (
    <div className="flex flex-col gap-5 h-full">
      <BackButton />
      <div className="flex flex-col gap-5 flex-grow p-10 bg-white rounded-xl">
        <h2 className="font-bold">내가 쓴 글 </h2>
        <div className="flex justify-between  text-xs text-gray-400 font-normal">
          <p className="">제목</p>
          <div className="flex justify-between w-28 xs:w-48 sm:w-72">
            <p>댓글수</p>
            <p>작성일</p>
          </div>
        </div>
        <div className="flex flex-col flex-grow items-center  justify-center">
          {' '}
          <p className="text-base font-semibold">아직 게시된 글이 없어요</p>
          <p className="text-sm">내 플레이의 과실이 궁금하다면?</p>
          <Button asChild variant="primary" className="mt-3">
            <Link href="/write">게시글 작성</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MyPostPage;
