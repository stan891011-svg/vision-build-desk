import { SlideWrapper, TimeBadge } from './SlideComponents';

const SlideBitget = () => (
  <SlideWrapper>
    <TimeBadge time="8:10–8:30 PM" />
    <h2 className="text-6xl font-black mb-8 tracking-brutal">Bitget</h2>
    <p className="text-2xl text-muted-foreground max-w-2xl">
      A global cryptocurrency exchange serving over <span className="text-foreground font-bold">125 million</span> users worldwide.
    </p>
  </SlideWrapper>
);

export default SlideBitget;
