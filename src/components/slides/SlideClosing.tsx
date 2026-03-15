import { SlideWrapper } from './SlideComponents';

const SlideClosing = () => (
  <SlideWrapper>
    <h2 className="text-7xl font-black mb-8 tracking-brutal">Goodnight.</h2>
    <p className="text-2xl text-muted-foreground mb-8">
      Thank you to <span className="text-foreground font-bold">Lovable</span>, <span className="text-foreground font-bold">Headstart</span>, <span className="text-foreground font-bold">Base</span>, and <span className="text-foreground font-bold">Bitget</span>.
    </p>
    <p className="text-xl text-muted-foreground mb-16">
      Thank you to our co-hosts LSE Generate and LSE Blockchain Society, all our judges, and every single participant.
    </p>
    <div className="flex gap-8 font-mono-brand text-sm uppercase tracking-widest text-muted-foreground">
      <span>@velocitylse</span>
      <span>lsebuild.com</span>
    </div>
  </SlideWrapper>
);

export default SlideClosing;
