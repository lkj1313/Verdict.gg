'use client';

import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/common';

const BackButton = () => {
  const router = useRouter();

  return (
    <Button
      variant="primary"
      onClick={() => router.back()}
      className="flex items-center justify-center rounded-full w-10 p-0"
    >
      <ArrowLeft className="w-4 h-4 " />
    </Button>
  );
};

export default BackButton;
