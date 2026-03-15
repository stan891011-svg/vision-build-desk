import { SlideWrapper } from './SlideComponents';

const SlideTeamUp = () => (
  <SlideWrapper>
    <h2 className="text-8xl font-black mb-8 tracking-brutal italic">TEAM UP</h2>
    <p className="text-3xl text-muted-foreground mb-12">
      5 minutes to find your squad. Solo is fine. <span className="text-foreground font-bold">Shipping is mandatory.</span>
    </p>
    <div className="flex gap-12 items-end">
      <div>
        <div className="text-sm font-mono-brand text-muted-foreground uppercase mb-2">Hacking starts</div>
        <div className="text-5xl font-mono-brand text-primary font-bold">5:30 PM</div>
      </div>
      <div>
        <div className="text-sm font-mono-brand text-muted-foreground uppercase mb-2">Duration</div>
        <div className="text-5xl font-mono-brand text-foreground font-bold">2H30</div>
      </div>
    </div>
  </SlideWrapper>
);

export default SlideTeamUp;
