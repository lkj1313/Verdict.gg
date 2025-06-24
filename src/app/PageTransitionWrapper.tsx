'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
}

const PageTransitionWrapper = ({ children, className = '' }: Props) => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        className={className}
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransitionWrapper;
