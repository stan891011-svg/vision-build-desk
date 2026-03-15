import { SlideWrapper } from './SlideComponents';
import logoEntrepreneurs from '@/assets/logo-entrepreneurs.jpeg';

const SlideEntrepreneurs = () => (
  <SlideWrapper>
    <div className="flex items-center gap-6 mb-8">
      <img src={logoEntrepreneurs} alt="Entrepreneurs Society" className="h-16 w-16 rounded-lg object-cover" />
      <h2 className="text-6xl font-black tracking-brutal">Entrepreneurs Society</h2>
    </div>
    <p className="text-2xl text-muted-foreground max-w-2xl">
      LSE's hub for aspiring founders. Connecting students with the resources, networks, and mindset to launch ventures.
    </p>
  </SlideWrapper>
);

export default SlideEntrepreneurs;
