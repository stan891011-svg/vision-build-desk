import { SlideWrapper } from './SlideComponents';
import { Trophy } from 'lucide-react';

const SlideAwards = () => (
  <SlideWrapper>
    <h2 className="text-6xl font-black mb-8 tracking-brutal">AWARDS</h2>
    <div className="grid grid-cols-2 gap-8">
      <div className="space-y-3">
        <div className="text-lg font-mono-brand text-muted-foreground uppercase mb-4">AI Track</div>
        <div className="p-4 border-l-4 border-muted bg-secondary flex justify-between items-center">
          <span className="text-xl font-bold uppercase">3rd Place — AI</span>
        </div>
        <div className="p-4 border-l-4 border-muted bg-secondary flex justify-between items-center">
          <span className="text-xl font-bold uppercase">2nd Place — AI</span>
        </div>
        <div className="p-4 border-l-4 border-primary bg-secondary flex justify-between items-center">
          <span className="text-xl font-bold uppercase">🏆 Winner — AI</span>
          <Trophy className="text-primary w-5 h-5" />
        </div>
      </div>
      <div className="space-y-3">
        <div className="text-lg font-mono-brand text-muted-foreground uppercase mb-4">Blockchain Track</div>
        <div className="p-4 border-l-4 border-muted bg-secondary flex justify-between items-center">
          <span className="text-xl font-bold uppercase">3rd Place — Blockchain</span>
        </div>
        <div className="p-4 border-l-4 border-muted bg-secondary flex justify-between items-center">
          <span className="text-xl font-bold uppercase">2nd Place — Blockchain</span>
        </div>
        <div className="p-4 border-l-4 border-primary bg-secondary flex justify-between items-center">
          <span className="text-xl font-bold uppercase">🏆 Winner — Blockchain</span>
          <Trophy className="text-primary w-5 h-5" />
        </div>
      </div>
    </div>
  </SlideWrapper>
);

export default SlideAwards;
