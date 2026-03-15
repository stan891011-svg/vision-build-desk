import { SlideWrapper } from './SlideComponents';
import logoBitget from '@/assets/logo-bitget-icon.jpeg';

const SlideBitget = () => (
  <SlideWrapper>
    <div className="flex items-center gap-6 mb-8">
      <img src={logoBitget} alt="Bitget" className="h-16 w-16 rounded-lg object-cover" />
      <h2 className="text-6xl font-black tracking-brutal">Bitget</h2>
    </div>
    <p className="text-2xl text-muted-foreground max-w-2xl">
      A global cryptocurrency exchange serving over <span className="text-foreground font-bold">125 million</span> users worldwide.
    </p>
  </SlideWrapper>
);

export default SlideBitget;
