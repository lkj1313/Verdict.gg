import { Input } from '@/components/common';
import Textarea from '@/components/common/Textarea';

const PostHashTagSection = () => {
  return (
    <section className="flex flex-col gap-5 p-10  bg-white rounded-xl">
      <p className="text-primary font-bold">글 작성</p>
      <div className="flex items-center gap-3">
        <Input
          className="border-black rounded-2xl"
          placeholder="제목을 입력해 주세요"
        ></Input>
      </div>
      <div className="">
        <Textarea
          placeholder="상황을 구체적으로 작성해주세요 (예: 어떤 장면인지, 어떤 판단을 받고 싶은지)"
          className="h-64"
        />
      </div>
      <p className="text-primary font-bold">해시태그</p>
      <Input
        className="border-black rounded-2xl"
        placeholder="해시태그를 입력해주세요"
      ></Input>
    </section>
  );
};

export { PostHashTagSection };
