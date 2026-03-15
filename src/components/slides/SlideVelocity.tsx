import { SlideWrapper } from './SlideComponents';
import logoVelocity from '@/assets/logo-velocity.jpeg';

const SlideVelocity = () =>
<SlideWrapper>
    <div className="flex items-center gap-6 mb-8">
      <img src={logoVelocity} alt="Velocity" className="h-16 w-16 rounded-lg object-cover" />
      <h2 className="text-6xl font-black tracking-brutal">Velocity</h2>
    </div>
    <p className="text-2xl text-muted-foreground max-w-2xl">
      LSE's first AI product-building society. We help students from <span className="text-foreground font-bold">any discipline</span> build real products using AI.
    </p>
    <p className="text-xl text-muted-foreground mt-4 max-w-2xl">Co-hosts of LSE BUILD, showing what's possible when ambition meets the right tools.

  </p>
  </SlideWrapper>;


export default SlideVelocity;