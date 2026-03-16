import { SlideWrapper } from './SlideComponents';

const SlideDeadline = () => (
  <SlideWrapper>
    <div className="text-center">
      <h2 className="text-[12vw] font-black leading-none tracking-brutal mb-8">
        LSE <span className="text-primary">BUILD</span>
      </h2>
      <div className="text-6xl font-mono-brand text-muted-foreground">
        DEADLINE <span className="text-foreground font-black">8:05 PM</span>
      </div>
    </div>
  </SlideWrapper>
);

export default SlideDeadline;
