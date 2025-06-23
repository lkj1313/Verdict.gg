import { Input } from '@/components/common';

const HashtagInputSection = () => {
  return (
    <>
      <p className="text-primary font-bold">해시태그</p>
      <Input
        className="border-black rounded-2xl"
        placeholder="해시태그를 입력해주세요"
      ></Input>
    </>
  );
};

export default HashtagInputSection;
