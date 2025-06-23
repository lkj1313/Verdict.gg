'use client';

import { Button } from '@/components/common';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from '@/components/shadcn/dialog';
import { Pencil } from 'lucide-react';
import Image from 'next/image';

export default function ProfileModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-sm bg-white rounded-xl">
        <DialogHeader>
          <DialogTitle className="text-center">고쿠 님</DialogTitle>
        </DialogHeader>

        <div className="flex flex-col items-center space-y-4 mt-2">
          {/* 프로필 이미지 */}
          <div className="relative w-24 h-24">
            <Image
              src="/placeholder-profile.svg" // 실제 유저 이미지로 교체
              alt="profile"
              width={96}
              height={96}
              className="rounded-full bg-green-700 object-cover"
            />
            <Button
              variant="ghost"
              className="absolute bottom-1 right-1 p-1 w-6 h-6 bg-white border rounded-full shadow"
            >
              <Pencil className="w-4 h-4 rounded-full text-gray-600" />
            </Button>
          </div>

          {/* 랭크 & 포인트 */}
          <div className="text-center text-sm space-y-1">
            <p className="font-semibold text-gray-900">언랭</p>
            <p className="text-gray-600 text-xs">보유 포인트 : 0P</p>
          </div>

          <hr className="w-full border-t border-primary" />

          {/* 판결 승률 */}
          <div className="w-full text-center">
            <p className="text-sm font-medium text-gray-800 mb-2">판결 승률</p>

            <p className="mt-2 text-xs text-gray-500">0전 0승 0패</p>
          </div>

          <hr className="w-full border-t border-primary" />
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button className="w-full mt-4 bg-gray-800 hover:bg-gray-700 text-white py-2 rounded-md">
              닫기
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
