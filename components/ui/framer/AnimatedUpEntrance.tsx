'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface AnimatedUpEntranceProps {
  readonly children: ReactNode;
  readonly delay?: number;
  readonly duration?: number;
  readonly className?: string;
}

export default function AnimatedUpEntrance({
  children,
  delay = 0.3,
  duration = 0.8,
  className,
}: AnimatedUpEntranceProps) {
  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      className={className}
      initial={{ opacity: 0, y: 50 }}
      transition={{
        duration,
        delay,
        ease: [0.17, 0.55, 0.55, 1], // Custom easing function for a smooth entrance
      }}
    >
      {children}
    </motion.div>
  )
}
