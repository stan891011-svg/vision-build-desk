import { useState, useEffect, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';
import SlideAgenda from '@/components/slides/SlideAgenda';
import SlideTitle from '@/components/slides/SlideTitle';
import SlideVelocity from '@/components/slides/SlideVelocity';
import SlideLovable from '@/components/slides/SlideLovable';
import SlideBlockchain from '@/components/slides/SlideBlockchain';
import SlideEntrepreneurs from '@/components/slides/SlideEntrepreneurs';
import SlideHeadstart from '@/components/slides/SlideHeadstart';
import SlideBase from '@/components/slides/SlideBase';
import SlideBitget from '@/components/slides/SlideBitget';
import SlideVibecoding from '@/components/slides/SlideVibecoding';
import SlideTracks from '@/components/slides/SlideTracks';
import SlideTeamUp from '@/components/slides/SlideTeamUp';
import SlideHacking from '@/components/slides/SlideHacking';
import SlideSubmission from '@/components/slides/SlideSubmission';
import SlideJudges from '@/components/slides/SlideJudges';
import SlideDemos from '@/components/slides/SlideDemos';
import SlideAwards from '@/components/slides/SlideAwards';
import SlideClosing from '@/components/slides/SlideClosing';

const slides = [
  <SlideAgenda />,
  <SlideTitle />,
  <SlideVelocity />,
  <SlideLovable />,
  <SlideBlockchain />,
  <SlideEntrepreneurs />,
  <SlideHeadstart />,
  <SlideBase />,
  <SlideBitget />,
  <SlideVibecoding />,
  <SlideTracks />,
  <SlideTeamUp />,
  <SlideHacking />,
  <SlideSubmission />,
  <SlideJudges />,
  <SlideDemos />,
  <SlideAwards />,
  <SlideClosing />,
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'ArrowRight' || e.key === ' ') {
      e.preventDefault();
      setCurrentSlide(prev => Math.min(prev + 1, slides.length - 1));
    }
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      setCurrentSlide(prev => Math.max(prev - 1, 0));
    }
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div className="fixed inset-0 bg-background text-foreground overflow-hidden selection:bg-primary selection:text-primary-foreground">
      <AnimatePresence mode="wait">
        <div key={currentSlide} className="h-full w-full">
          {slides[currentSlide]}
        </div>
      </AnimatePresence>

      {/* Progress Bar */}
      <div className="fixed bottom-0 left-0 w-full h-1 bg-secondary">
        <motion.div
          className="h-full bg-primary"
          initial={{ width: 0 }}
          animate={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Slide Counter */}
      <div className="fixed bottom-8 right-12 flex gap-4 text-[10px] font-mono-brand text-muted-foreground uppercase tracking-[0.2em]">
        <span>{currentSlide + 1} / {slides.length}</span>
      </div>

      {/* Click Navigation */}
      <div className="fixed inset-0 flex pointer-events-none">
        <div
          className="w-1/3 h-full pointer-events-auto cursor-w-resize opacity-0"
          onClick={() => setCurrentSlide(prev => Math.max(prev - 1, 0))}
        />
        <div className="w-1/3 h-full" />
        <div
          className="w-1/3 h-full pointer-events-auto cursor-e-resize opacity-0"
          onClick={() => setCurrentSlide(prev => Math.min(prev + 1, slides.length - 1))}
        />
      </div>
    </div>
  );
};

export default Index;
