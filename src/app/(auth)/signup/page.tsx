import { Suspense } from 'react';
import SignupForm from '@/feature/auth/signup/ui/SignupForm';

export default function SignupPage() {
  return (
    <Suspense fallback={<div className="text-center pt-20">로딩 중...</div>}>
      <SignupForm />
    </Suspense>
  );
}
