'use client';

import { Button, Input } from '@/components/common';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { cn } from '@/shared/lib/utils/cn';

export default function SignupForm() {
  const searchParams = useSearchParams();
  const email = searchParams.get('email') ?? '';

  const [nickname, setNickname] = useState('');
  const [is14Checked, setIs14Checked] = useState(false);
  const [termsChecked, setTermsChecked] = useState(false);
  const [privacyChecked, setPrivacyChecked] = useState(false);
  const [allChecked, setAllChecked] = useState(false);

  const handleAllCheck = () => {
    const newValue = !allChecked;
    setAllChecked(newValue);
    setIs14Checked(newValue);
    setTermsChecked(newValue);
    setPrivacyChecked(newValue);
  };
  // 상단 useState 아래에 추가
  const isValid =
    nickname.trim().length >= 2 &&
    is14Checked &&
    termsChecked &&
    privacyChecked;
  useEffect(() => {
    const all = is14Checked && termsChecked && privacyChecked;
    setAllChecked(all);
  }, [is14Checked, termsChecked, privacyChecked]);
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="w-full bg-white max-w-md rounded-xl shadow-md p-8 space-y-6"
      >
        <Link href="/" className="inline-block w-full">
          <h1 className="text-center text-3xl font-bold tracking-tight text-primary">
            Verdict.gg
          </h1>
        </Link>
        <h2 className="text-center xs:text-lg text-gray-600">간단 회원가입</h2>

        <div>
          <label className="block text-sm mb-1">이메일</label>
          <div className="bg-gray-100 text-gray-500 rounded-md px-4 py-3">
            {email}
          </div>
        </div>

        <div>
          <label className="block text-sm mb-1">닉네임</label>
          <div className="flex flex-col  gap-2">
            <Input
              type="text"
              placeholder="닉네임을 입력해주세요."
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
            />
            {nickname.trim().length > 0 && nickname.trim().length < 2 && (
              <p className="mt-1 text-sm text-red-500">
                닉네임은 2자 이상이어야 합니다.
              </p>
            )}
          </div>
        </div>

        <div className="space-y-3 text-xs xs:text-sm text-gray-800">
          <label className="flex items-center gap-2">
            <Input
              type="checkbox"
              checked={is14Checked}
              onChange={() => setIs14Checked(!is14Checked)}
              variant="checkbox"
            />
            <span>
              만 14세 이상입니다. <span className="">(필수)</span>
            </span>
          </label>

          <label className="flex items-center gap-2">
            <Input
              variant="checkbox"
              type="checkbox"
              checked={termsChecked}
              onChange={() => setTermsChecked(!termsChecked)}
            />
            <span>
              <span className="text-red-500">이용약관</span>에 동의합니다.
              (필수)
            </span>
          </label>

          <label className="flex items-center gap-2">
            <Input
              type="checkbox"
              checked={privacyChecked}
              onChange={() => setPrivacyChecked(!privacyChecked)}
              variant="checkbox"
            />
            <span>
              <span className="text-red-500">개인정보처리방침</span>에
              동의합니다. (필수)
            </span>
          </label>

          <hr className="border-t my-3" />

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={allChecked}
              onChange={handleAllCheck}
            />
            <span>모두 동의합니다.</span>
          </label>
        </div>

        <Button
          variant="ghost"
          type="submit"
          disabled={!isValid}
          className={cn(
            'w-full mt-4 py-3 rounded-md text-white text-sm font-semibold',
            isValid
              ? 'bg-black hover:bg-gray-800'
              : 'bg-gray-300 cursor-not-allowed '
          )}
        >
          가입하기
        </Button>
      </form>
    </div>
  );
}
