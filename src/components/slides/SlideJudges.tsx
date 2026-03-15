import { SlideWrapper, SpeakerNote } from './SlideComponents';

const SlideJudges = () => (
  <SlideWrapper>
    <h2 className="text-6xl font-black mb-16 tracking-brutal">The Judges</h2>
    <div className="grid grid-cols-3 gap-12">
      {[1, 2, 3].map(i => (
        <div key={i} className="flex flex-col gap-4">
          <div className="aspect-square bg-secondary border border-border rounded grayscale hover:grayscale-0 transition-all duration-400 flex items-center justify-center">
            <span className="text-muted-foreground font-mono-brand text-sm">PHOTO</span>
          </div>
          <div className="font-black text-xl uppercase tracking-brutal">Judge {i}</div>
          <div className="text-primary font-mono-brand text-sm uppercase">Industry Expert</div>
        </div>
      ))}
    </div>
    <SpeakerNote>
      Announcement and thanks to the judges for their attendance and participation. 8:00–8:10 PM: finalist team selection.
    </SpeakerNote>
  </SlideWrapper>
);

export default SlideJudges;
