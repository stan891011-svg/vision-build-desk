import { SlideWrapper, TimeBadge, SpeakerNote } from './SlideComponents';

const SlideDemos = () => (
  <SlideWrapper>
    <TimeBadge time="8:10 PM — 5 mins per team" />
    <h2 className="text-[12vw] font-black leading-none italic tracking-brutal">DEMO TIME</h2>
    <p className="text-2xl text-muted-foreground font-mono-brand mt-8">
      3 AI TEAMS • 3 BLOCKCHAIN TEAMS • 5 MINS EACH
    </p>
    <SpeakerNote>
      3 teams from Blockchain, 3 teams from AI. 5 minutes each to present demo. 10 minutes once all demos have been presented for judges to decide winners.
    </SpeakerNote>
  </SlideWrapper>
);

export default SlideDemos;
