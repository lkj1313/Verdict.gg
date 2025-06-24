import { ProfileInfo, ProfileMenuList } from './index';

interface Props {
  onProfileClick: () => void;
}

export const ProfileDropdown = ({ onProfileClick }: Props) => (
  <div className="absolute right-0 mt-2 w-56 rounded-lg border border-primary bg-white shadow-lg z-50">
    <ProfileInfo onProfileClick={onProfileClick} />
    <ProfileMenuList />
  </div>
);
