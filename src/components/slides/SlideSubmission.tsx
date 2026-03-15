import { SlideWrapper } from './SlideComponents';

const SlideSubmission = () => (
  <SlideWrapper>
    <div className="bg-primary p-1 text-background mb-8 w-fit font-black px-4 text-lg">URGENT</div>
    <h2 className="text-8xl font-black mb-8 tracking-brutal">SUBMIT NOW</h2>
    <p className="text-3xl text-muted-foreground mb-12">The portal closes at <span className="text-foreground font-bold">8:00 PM</span>. No exceptions.</p>
    <div className="text-2xl font-mono-brand">
      <div className="text-muted-foreground uppercase text-sm mb-2">Submission Link</div>
      <div className="underline decoration-primary underline-offset-8 font-bold text-foreground">lsebuild.com/submit</div>
    </div>
  </SlideWrapper>
);

export default SlideSubmission;
