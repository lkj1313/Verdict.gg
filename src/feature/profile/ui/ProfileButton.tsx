import { User } from 'lucide-react';
import { Button } from '@/components/common';

interface Props {
  onClick: () => void;
}

export const ProfileButton = ({ onClick }: Props) => (
  <Button
    variant="ghost"
    title="프로필"
    onClick={onClick}
    aria-label="Profile menu"
    size="icon"
  >
    <User className="w-5 h-5 text-gray-600" />
  </Button>
);
