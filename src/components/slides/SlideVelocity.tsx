import { SlideWrapper, SpeakerNote } from './SlideComponents';

const SlideVelocity = () => (
  <SlideWrapper>
    <h2 className="text-7xl font-black mb-8 tracking-brutal">Velocity</h2>
    <p className="text-3xl text-muted-foreground max-w-3xl leading-relaxed">
      LSE's first AI product-building society. We help students from <span className="text-foreground font-bold">any discipline</span> build real products using AI.
    </p>
    <p className="text-2xl text-muted-foreground mt-6 max-w-3xl">
      We co-founded and organised LSE BUILD to show what's possible when ambition meets the right tools.
    </p>
    <SpeakerNote>
      Introduce Velocity — who we are, what we're doing. Yamin speech. Mention Lovable credits. Direct attendees to look at the screen for instructions. Show QR on display.
    </SpeakerNote>
  </SlideWrapper>
);

export default SlideVelocity;
