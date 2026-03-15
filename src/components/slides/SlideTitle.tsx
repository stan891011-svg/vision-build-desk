import { SlideWrapper, Badge, TimeBadge, SpeakerNote } from './SlideComponents';

const SlideTitle = () => (
  <SlideWrapper>
    <TimeBadge time="8:10 PM — Introduction begins" />
    <Badge>March 16, 2026</Badge>
    <h1 className="text-[10vw] font-black leading-[0.85] tracking-brutal mt-4 mb-8 text-balance">
      LSE <span className="text-primary">BUILD</span>
    </h1>
    <p className="text-2xl font-light text-muted-foreground max-w-2xl mb-12">
      London's Premier Student AI Buildathon. Hosted by LSESU Velocity, LSE Generate, & LSE Blockchain Society.
    </p>
    <div className="flex items-center gap-6">
      <div className="h-px w-24 bg-border" />
      <span className="text-sm font-mono-brand text-muted-foreground uppercase tracking-widest">Powered by</span>
      <div className="px-4 py-2 bg-foreground text-background font-black text-xl tracking-brutal">LOVABLE</div>
    </div>
  </SlideWrapper>
);

export default SlideTitle;
