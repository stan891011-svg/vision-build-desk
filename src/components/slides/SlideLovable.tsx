import { SlideWrapper, Badge, TimeBadge, SpeakerNote } from './SlideComponents';

const SlideLovable = () => (
  <SlideWrapper>
    <TimeBadge time="8:10–8:30 PM" />
    <Badge>Title Sponsor</Badge>
    <div className="mt-8 text-[10vw] font-black tracking-brutal mb-8">LOVABLE</div>
    <p className="text-2xl text-muted-foreground max-w-2xl">
      The world's fastest AI app builder. You'll be launching your ideas using Lovable — a huge thank you to them as this wouldn't be possible without them!
    </p>
    <p className="text-xl text-primary mt-4 font-bold">Use your Lovable credits to ship tonight.</p>
    <SpeakerNote>
      Highlight Lovable as title sponsor. Mention credits provided to participants. Emphasise this is the tool they'll use to build.
    </SpeakerNote>
  </SlideWrapper>
);

export default SlideLovable;
