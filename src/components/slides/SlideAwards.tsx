import { SlideWrapper, TimeBadge, SpeakerNote } from './SlideComponents';
import { Trophy } from 'lucide-react';

const SlideAwards = () => (
  <SlideWrapper>
    <TimeBadge time="~8:50 PM — Awards Ceremony" />
    <h2 className="text-8xl font-black mb-16 tracking-brutal">AWARDS</h2>
    <div className="space-y-4">
      <div className="text-xl font-mono-brand text-muted-foreground uppercase mb-6">AI Track</div>
      <div className="p-6 border-l-4 border-muted bg-secondary flex justify-between items-center">
        <span className="text-2xl font-bold uppercase">3rd Place — AI</span>
      </div>
      <div className="p-6 border-l-4 border-muted bg-secondary flex justify-between items-center">
        <span className="text-2xl font-bold uppercase">2nd Place — AI</span>
      </div>
      <div className="p-6 border-l-4 border-primary bg-secondary flex justify-between items-center">
        <span className="text-2xl font-bold uppercase">🏆 Winner — AI</span>
        <Trophy className="text-primary" />
      </div>
      <div className="h-4" />
      <div className="text-xl font-mono-brand text-muted-foreground uppercase mb-6">Blockchain Track</div>
      <div className="p-6 border-l-4 border-muted bg-secondary flex justify-between items-center">
        <span className="text-2xl font-bold uppercase">3rd Place — Blockchain</span>
      </div>
      <div className="p-6 border-l-4 border-muted bg-secondary flex justify-between items-center">
        <span className="text-2xl font-bold uppercase">2nd Place — Blockchain</span>
      </div>
      <div className="p-6 border-l-4 border-primary bg-secondary flex justify-between items-center">
        <span className="text-2xl font-bold uppercase">🏆 Winner — Blockchain</span>
        <Trophy className="text-primary" />
      </div>
    </div>
    <SpeakerNote>
      Judges provide feedback for each demo. Announce 3rd, 2nd, 1st for AI, then 3rd, 2nd, 1st for Blockchain.
    </SpeakerNote>
  </SlideWrapper>
);

export default SlideAwards;
