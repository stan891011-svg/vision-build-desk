import { SlideWrapper } from './SlideComponents';
import logoHeadstart from '@/assets/logo-headstart.jpeg';

const SlideHeadstart = () => (
  <SlideWrapper>
    <div className="flex items-center gap-6 mb-8">
      <img src={logoHeadstart} alt="Headstart" className="h-16 w-16 rounded-lg object-cover" />
      <h2 className="text-6xl font-black tracking-brutal">Headstart Global</h2>
    </div>
    <p className="text-2xl text-muted-foreground max-w-2xl">
      Our prize partner. They'll be introducing themselves and their vision shortly.
    </p>
  </SlideWrapper>
);

export default SlideHeadstart;
