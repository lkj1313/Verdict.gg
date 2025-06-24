import { Button } from '@/components/common';

const SubmitButton = () => {
  return (
    <section className="flex justify-end">
      <Button title="작성완료" variant="primary" type="submit">
        작성완료
      </Button>
    </section>
  );
};

export { SubmitButton };
