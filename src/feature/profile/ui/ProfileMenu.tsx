'use client';

import { useProfileMenu } from '../hooks/useProfileMenu';
import { useClickOutside } from '@/shared/lib/hooks';
import { ProfileButton, ProfileDropdown, ProfileModal } from './index';

const ProfileMenu = () => {
  const { open, setOpen, showProfileModal, setShowProfileModal, wrapperRef } =
    useProfileMenu();

  useClickOutside(wrapperRef, () => setOpen(false));

  return (
    <>
      <div className="relative" ref={wrapperRef}>
        <ProfileButton onClick={() => setOpen((prev) => !prev)} />
        {open && (
          <ProfileDropdown
            onProfileClick={() => {
              setShowProfileModal(true);
              setOpen(false);
            }}
          />
        )}
      </div>
      <ProfileModal
        open={showProfileModal}
        onClose={() => setShowProfileModal(false)}
      />
    </>
  );
};

export default ProfileMenu;
