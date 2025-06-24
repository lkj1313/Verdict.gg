import { useRef, useState } from 'react';

export function useNotificationMenu() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  return { open, setOpen, menuRef };
}
