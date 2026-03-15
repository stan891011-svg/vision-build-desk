import { SlideWrapper, Badge } from './SlideComponents';
import logoBase from '@/assets/logo-base.jpeg';
import logoHeadstart from '@/assets/logo-headstart.jpeg';
import logoEntrepreneurs from '@/assets/logo-entrepreneurs.jpeg';
import logoBitget from '@/assets/logo-bitget-icon.jpeg';
import logoVelocity from '@/assets/logo-velocity.jpeg';
import logoBlockchain from '@/assets/logo-blockchain.jpeg';
import logoLovable from '@/assets/logo-lovable-full.jpeg';

const SlideTitle = () => (
  <SlideWrapper>
    {/* Velocity x Blockchain top-left */}
    <div className="absolute top-4 left-4 flex items-center gap-3">
      <img src={logoVelocity} alt="Velocity" className="h-14 w-14 rounded-md object-cover" />
      <span className="text-muted-foreground font-mono-brand text-sm">×</span>
      <img src={logoBlockchain} alt="Blockchain Society" className="h-14 w-14 rounded-md object-cover" />
    </div>

    {/* Partner logos top-right */}
    <div className="absolute top-4 right-4 flex items-center gap-3">
      {[logoBase, logoHeadstart, logoBitget, logoEntrepreneurs].map((logo, i) => (
        <img key={i} src={logo} alt="" className="h-14 w-14 rounded-md object-cover" />
      ))}
    </div>

    <Badge>March 16, 2026</Badge>
    <h1 className="text-[10vw] font-black leading-[0.85] tracking-brutal mt-4 mb-6 text-balance">
      LSE <span className="text-primary">BUILD</span>
    </h1>
    <p className="text-2xl font-light text-muted-foreground max-w-2xl mb-2">
      London's Premier Student AI Buildathon.
    </p>
    <p className="text-xl text-muted-foreground max-w-2xl mb-12">
      Hosted by <span className="text-foreground font-semibold">Blockchain x Velocity</span>
    </p>
    <div className="flex items-center gap-6">
      <div className="h-px w-24 bg-border" />
      <span className="text-lg font-mono-brand text-muted-foreground uppercase tracking-widest">Powered by</span>
      <img src={logoLovable} alt="Lovable" className="h-16 rounded-lg object-contain" />
    </div>
  </SlideWrapper>
);

export default SlideTitle;
