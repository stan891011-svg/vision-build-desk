import { SlideWrapper, Badge } from './SlideComponents';

const SlideVibecoding = () => (
  <SlideWrapper>
    <Badge>The Method</Badge>
    <h2 className="text-8xl font-black mt-8 mb-8 tracking-brutal">VIBECODING</h2>
    <p className="text-3xl text-muted-foreground leading-relaxed max-w-4xl">
      Describe the logic. AI handles the syntax. <span className="text-foreground font-bold">No coding experience required.</span>
    </p>
    <p className="text-2xl text-muted-foreground mt-4 max-w-3xl">
      Build apps by describing what you want to tools like Lovable and Cursor. This is how you ship in 2.5 hours.
    </p>
  </SlideWrapper>
);

export default SlideVibecoding;
