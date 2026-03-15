import { SlideWrapper, TimeBadge, SpeakerNote } from './SlideComponents';

const SlideHeadstart = () => (
  <SlideWrapper>
    <TimeBadge time="8:10–8:30 PM" />
    <h2 className="text-6xl font-black mb-8 tracking-brutal">Headstart Global</h2>
    <p className="text-2xl text-muted-foreground max-w-2xl">
      Our prize partner. They'll be introducing themselves and their vision shortly.
    </p>
    <SpeakerNote>
      Hand over to Headstart representative to speak.
    </SpeakerNote>
  </SlideWrapper>
);

export default SlideHeadstart;
