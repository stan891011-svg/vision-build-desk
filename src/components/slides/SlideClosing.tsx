import { SlideWrapper } from './SlideComponents';
import logoBase from '@/assets/logo-base.jpeg';
import logoHeadstart from '@/assets/logo-headstart.jpeg';
import logoEntrepreneurs from '@/assets/logo-entrepreneurs.jpeg';
import logoBitget from '@/assets/logo-bitget-icon.jpeg';
import logoVelocity from '@/assets/logo-velocity.jpeg';
import logoBlockchain from '@/assets/logo-blockchain.jpeg';

const SlideClosing = () => (
  <SlideWrapper>
    {/* Velocity x Blockchain top-left */}
    <div className="absolute top-8 left-12 flex items-center gap-4">
      <img src={logoVelocity} alt="Velocity" className="h-14 w-14 rounded-md object-cover" />
      <span className="text-muted-foreground font-mono-brand text-sm">×</span>
      <img src={logoBlockchain} alt="Blockchain Society" className="h-14 w-14 rounded-md object-cover" />
    </div>

    {/* Partner logos top-right */}
    <div className="absolute top-8 right-12 flex items-center gap-4">
      {[logoBase, logoHeadstart, logoBitget, logoEntrepreneurs].map((logo, i) => (
        <img key={i} src={logo} alt="" className="h-14 w-14 rounded-md object-cover" />
      ))}
    </div>

    <h2 className="text-7xl font-black mb-8 tracking-brutal">Goodnight.</h2>
    <p className="text-2xl text-muted-foreground mb-8">
      Thank you to <span className="text-foreground font-bold">Lovable</span>, <span className="text-foreground font-bold">Headstart</span>, <span className="text-foreground font-bold">Base</span>, and <span className="text-foreground font-bold">Bitget</span>.
    </p>
    <p className="text-xl text-muted-foreground mb-16">
      Thank you to our co-hosts LSE Blockchain Society, all our judges, and every single participant.
    </p>
    <div className="flex gap-8 font-mono-brand text-sm uppercase tracking-widest text-muted-foreground">
      <span>@velocitylse</span>
      <span>lsebuild.com</span>
    </div>
  </SlideWrapper>
);

export default SlideClosing;
