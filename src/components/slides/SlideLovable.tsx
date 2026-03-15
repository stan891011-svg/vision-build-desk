import { SlideWrapper, Badge } from './SlideComponents';
import logoLovable from '@/assets/logo-lovable-full.jpeg';

const SlideLovable = () => (
  <SlideWrapper>
    <Badge>Title Sponsor</Badge>
    <div className="flex items-center gap-6 mt-8 mb-8">
      <img src={logoLovable} alt="Lovable" className="h-16 rounded-lg object-contain" />
      <h2 className="text-6xl font-black tracking-brutal">Lovable</h2>
    </div>
    <p className="text-2xl text-muted-foreground max-w-2xl">
      The world's fastest AI app builder. You'll be launching your ideas using Lovable — a huge thank you to them as this wouldn't be possible without them!
    </p>
    <p className="text-xl text-primary mt-4 font-bold">Use your Lovable credits to ship tonight.</p>
  </SlideWrapper>
);

export default SlideLovable;
