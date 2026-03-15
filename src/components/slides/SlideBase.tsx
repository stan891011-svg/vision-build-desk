import { SlideWrapper } from './SlideComponents';
import logoBase from '@/assets/logo-base.jpeg';

const SlideBase = () => (
  <SlideWrapper>
    <div className="flex items-center gap-6 mb-8">
      <img src={logoBase} alt="Base" className="h-20 rounded-lg object-contain" />
    </div>
    <p className="text-2xl text-muted-foreground max-w-2xl">
      An open blockchain platform designed to serve as infrastructure for the global onchain economy.
    </p>
  </SlideWrapper>
);

export default SlideBase;
