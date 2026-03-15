import { SlideWrapper, Badge, SpeakerNote } from './SlideComponents';

const SlideHacking = () => (
  <SlideWrapper>
    <div className="text-center">
      <Badge>Session Live</Badge>
      <h2 className="text-[15vw] font-black leading-none my-8 tracking-brutal">
        GO <span className="text-primary">BUILD</span>
      </h2>
      <div className="flex justify-center gap-24 text-4xl font-mono-brand text-muted-foreground">
        <div>START <span className="text-foreground">5:40 PM</span></div>
        <div>DEADLINE <span className="text-foreground">8:00 PM</span></div>
      </div>
    </div>
    <SpeakerNote>
      Hacking session is live. Announce 30-minute mark at 7:30 PM. Announce 15-minute mark at 7:45 PM.
    </SpeakerNote>
  </SlideWrapper>
);

export default SlideHacking;
