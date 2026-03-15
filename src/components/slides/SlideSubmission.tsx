import { SlideWrapper, SpeakerNote } from './SlideComponents';

const SlideSubmission = () => (
  <SlideWrapper>
    <div className="bg-primary p-1 text-background mb-8 w-fit font-black px-4 text-lg">URGENT</div>
    <h2 className="text-8xl font-black mb-8 tracking-brutal">SUBMIT NOW</h2>
    <p className="text-3xl text-muted-foreground mb-12">The portal closes at <span className="text-foreground font-bold">8:00 PM</span>. No exceptions.</p>
    <div className="flex gap-12 items-center">
      <div className="w-48 h-48 bg-foreground p-2 rounded">
        <div className="w-full h-full bg-muted flex items-center justify-center text-background text-xs font-mono-brand">QR_CODE</div>
      </div>
      <div className="text-2xl font-mono-brand">
        <div className="text-muted-foreground uppercase text-sm mb-2">Submission Link</div>
        <div className="underline decoration-primary underline-offset-8 font-bold text-foreground">lsebuild.com/submit</div>
      </div>
    </div>
    <SpeakerNote>
      "FOR ALL PARTICIPANTS, YOU NOW HAVE 10 MINUTES TO SUBMIT." Have submission information on the screen. Submitted by 8 PM.
    </SpeakerNote>
  </SlideWrapper>
);

export default SlideSubmission;
