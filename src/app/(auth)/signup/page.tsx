'use client';

import { Input } from '@/components/common';
import Link from 'next/link';

import { useSearchParams } from 'next/navigation';
import { useState } from 'react';

export default function SignupPage() {
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

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10">
      <div className=" w-full bg-white max-w-md rounded-xl shadow-md p-8 space-y-6">
        <Link href="/" className="inline-block w-full">
          <h1 className=" text-center w-full text-3xl font-bold tracking-tight text-primary">
            Verdict.gg
          </h1>
        </Link>
        <h2 className="text-center xs:text-lg text-gray-600">간단 회원가입</h2>

        {/* 이메일 */}
        <div>
          <label className="block text-sm mb-1">이메일</label>
          <div className="bg-gray-100 text-gray-500 rounded-md px-4 py-3">
            {email}
          </div>
        </div>

        {/* 닉네임 */}
        <div>
          <label className="block text-sm mb-1">닉네임</label>
          <div className="flex items-center gap-2">
            <Input
              type="text"
              placeholder="닉네임을 입력해주세요."
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
            />
          </div>
        </div>

        {/* 체크박스들 */}
        <div className="space-y-3 text-xs xs:text-sm text-gray-800">
          <label className="flex items-center gap-2">
            <Input
              type="checkbox"
              checked={is14Checked}
              onChange={() => setIs14Checked(!is14Checked)}
              variant="checkbox"
            />
            <span>
              만 14세 이상입니다. <span className="text-gray-500">(필수)</span>
              <br />
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

        <button
          className="w-full mt-4 py-3 rounded-md bg-gray-300 text-white text-sm font-semibold"
          disabled
        >
          가입하기
        </button>
      </div>
    </div>
  );
}
