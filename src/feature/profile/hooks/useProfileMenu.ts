import { useRef, useState } from 'react';

export function useProfileMenu() {
  const [open, setOpen] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  return {
    open,
    setOpen,
    showProfileModal,
    setShowProfileModal,
    wrapperRef,
  };
}
