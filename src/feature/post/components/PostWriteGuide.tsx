'use client';
import React, { useState } from 'react';

const PostWriteGuide = () => {
  const [content, setContent] = useState('');

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="relative">
        {/* 입력 전 안내문 (오버레이) */}
        {content === '' && (
          <div className="absolute top-4 left-4 text-sm text-gray-400 whitespace-pre-line pointer-events-none">
            1. 판결 받고 싶은 게임 영상을 업로드해주세요.
            {'\n'} - 파일 크기 제한: 500MB
            {'\n'} - 파일 형식: mp4
            {'\n'}2. 불필요한 부분은 편집하고 핵심 상황만 포함해주세요.
            {'\n'}3. (선택) 이해를 도울 수 있는 이미지를 첨부해주세요.
            {'\n'} - 이미지 제한: 3개 이내 / 2MB / jpg, jpeg, png
          </div>
        )}

        {/* 실제 입력창 */}
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full h-64 p-4 border rounded-xl text-sm resize-none outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
};

export default PostWriteGuide;
