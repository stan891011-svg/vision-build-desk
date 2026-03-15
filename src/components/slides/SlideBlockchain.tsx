import { SlideWrapper, TimeBadge, SpeakerNote } from './SlideComponents';

const SlideBlockchain = () => (
  <SlideWrapper>
    <TimeBadge time="8:10–8:30 PM" />
    <h2 className="text-6xl font-black mb-8 tracking-brutal italic">LSE Blockchain Society</h2>
    <p className="text-2xl text-muted-foreground max-w-2xl">
      Co-hosts and infrastructure experts for the Web3 track. Driving student engagement with decentralised technologies.
    </p>
    <SpeakerNote>
      Kevin introduction. Blockchain Society intro as co-host.
    </SpeakerNote>
  </SlideWrapper>
);

export default SlideBlockchain;
