import { SlideWrapper } from './SlideComponents';
import logoBase from '@/assets/logo-base.jpeg';

const SlideBase = () => (
  <SlideWrapper>
    <div className="flex items-center gap-6 mb-8">
      <img src={logoBase} alt="Base" className="h-16 w-16 rounded-lg object-cover" />
      <h2 className="text-6xl font-black tracking-brutal">Base</h2>
    </div>
    <p className="text-2xl text-muted-foreground max-w-2xl">
      An open blockchain platform designed to serve as infrastructure for the global onchain economy.
    </p>
  </SlideWrapper>
);

export default SlideBase;
