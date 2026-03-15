import { motion } from 'framer-motion';
import { ReactNode } from 'react';

const transition = { duration: 0.4, ease: [0.16, 1, 0.3, 1] };

export const SlideWrapper = ({ children }: { children: ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    transition={transition}
    className="relative w-full h-full flex flex-col justify-center px-12 md:px-24"
  >
    {children}
  </motion.div>
);

export const Badge = ({ children }: { children: ReactNode }) => (
  <div className="px-3 py-1 border border-primary/50 bg-primary/10 text-primary text-xs font-mono-brand uppercase tracking-widest rounded-full w-fit">
    {children}
  </div>
);

export const TimeBadge = ({ time }: { time: string }) => (
  <div className="px-4 py-2 border border-muted bg-secondary text-muted-foreground text-sm font-mono-brand uppercase tracking-widest rounded w-fit">
    ⏱ {time}
  </div>
);

export const SpeakerNote = ({ children }: { children: ReactNode }) => (
  <div className="mt-8 p-4 border-l-2 border-primary/30 bg-secondary/50 text-muted-foreground text-sm max-w-2xl">
    <span className="text-primary font-mono-brand text-xs uppercase tracking-widest block mb-1">Speaker Notes</span>
    {children}
  </div>
);
