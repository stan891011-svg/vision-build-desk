import { SlideWrapper } from './SlideComponents';
import logoBlockchain from '@/assets/logo-blockchain.jpeg';

const SlideBlockchain = () => (
  <SlideWrapper>
    <div className="flex items-center gap-6 mb-8">
      <img src={logoBlockchain} alt="Blockchain Society" className="h-16 w-16 rounded-lg object-cover" />
      <h2 className="text-6xl font-black tracking-brutal">LSE Blockchain Society</h2>
    </div>
    <p className="text-2xl text-muted-foreground max-w-2xl">
      Co-hosts and infrastructure experts for the Web3 track. Driving student engagement with decentralised technologies.
    </p>
  </SlideWrapper>
);

export default SlideBlockchain;
