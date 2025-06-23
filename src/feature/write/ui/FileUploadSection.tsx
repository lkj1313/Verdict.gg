import { Button } from '@/components/common';
import { Monitor, Video } from 'lucide-react';

import { useIsMobile } from '@/shared/lib/hooks';

const FileUploadSection = ({
  tab,
  setTab,
}: {
  tab: 'file' | 'thumbnail';
  setTab: (tab: 'file' | 'thumbnail') => void;
}) => {
  const isMobile = useIsMobile();
  return (
    <section className="flex flex-col p-10 bg-white rounded-xl">
      <p className="font-bold text-primary">파일첨부</p>
      <div className="flex gap-2 py-5 xs:p-5">
        <Button
          onClick={() => setTab('file')}
          variant="ghost"
          size={isMobile ? 'icon' : undefined}
          title="파일 불러오기"
          className={tab === 'file' ? 'text-primary font-semibold' : undefined}
        >
          <Video className="w-5 h-5" />
          <span className="hidden xs:block">파일 불러오기</span>
        </Button>
        <Button
          onClick={() => setTab('thumbnail')}
          variant="ghost"
          size={isMobile ? 'icon' : undefined}
          title="썸네일 업로드"
          className={
            tab === 'thumbnail' ? 'text-primary font-semibold' : undefined
          }
        >
          <Monitor className="w-5 h-5" />
          <span className="hidden xs:block">썸네일 업로드</span>
        </Button>
      </div>
      <div className="border rounded-xl border-black  p-6 text-center text-gray-500 text-xs xs:text-sm">
        📎 파일을 끌어오거나 클릭 후 업로드 하세요
      </div>
    </section>
  );
};

export default FileUploadSection;
