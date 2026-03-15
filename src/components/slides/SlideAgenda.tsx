import { SlideWrapper, Badge } from './SlideComponents';
import logoBase from '@/assets/logo-base.jpeg';
import logoHeadstart from '@/assets/logo-headstart.jpeg';
import logoEntrepreneurs from '@/assets/logo-entrepreneurs.jpeg';
import logoBitget from '@/assets/logo-bitget-icon.jpeg';
import logoVelocity from '@/assets/logo-velocity.jpeg';
import logoBlockchain from '@/assets/logo-blockchain.jpeg';
import logoLovable from '@/assets/logo-lovable-full.jpeg';

const agendaItems = [
  { time: '5:00 PM', title: 'Registration & Welcome', badge: 'DOORS OPEN', active: false },
  { time: '5:10 PM', title: 'Opening Ceremony & Team Formation', badge: 'KEYNOTES, PARTNER INTROS, TRACK BRIEFINGS', active: false },
  { time: '5:30 PM', title: 'Hacking Session', badge: '2.5 HOURS TO SHIP', active: true },
  { time: '8:00 PM', title: 'Project Submission', badge: null, active: false },
  { time: '8:10 PM', title: 'Judging & Demos', badge: 'TOP TEAMS PRESENT', active: false },
  { time: '8:50 PM', title: 'Awards Ceremony & Closing', badge: null, active: false },
];

const SlideAgenda = () => (
  <SlideWrapper>
    <div className="flex h-full items-center gap-8">
      {/* Left brand column — mirrors SlideTitle layout */}
      <div className="flex flex-col justify-between w-[40%] shrink-0 py-8">
        {/* Velocity x Blockchain */}
        <div className="flex items-center gap-3">
          <img src={logoVelocity} alt="Velocity" className="h-10 w-10 rounded-md object-cover" />
          <span className="text-muted-foreground font-mono-brand text-sm">×</span>
          <img src={logoBlockchain} alt="Blockchain Society" className="h-10 w-10 rounded-md object-cover" />
        </div>

        <div>
          <Badge>March 16, 2026</Badge>
          <h1 className="text-7xl font-black leading-[0.85] tracking-brutal mt-4 mb-6">
            LSE <span className="text-primary">BUILD</span>
          </h1>
          <p className="text-lg font-light text-muted-foreground mb-3">
            London's Premier Student AI Buildathon.
          </p>
          <p className="text-sm text-muted-foreground mb-1">
            Hosted by <span className="text-foreground font-semibold">Blockchain x Velocity</span>
          </p>
          <p className="text-sm text-muted-foreground">
            In Collaboration with <span className="text-foreground font-semibold">Entrepreneurs Society</span>
          </p>
        </div>

        <div>
          {/* Partner logos */}
          <div className="flex items-center gap-3 mb-6">
            {[logoBase, logoHeadstart, logoBitget, logoEntrepreneurs].map((logo, i) => (
              <img key={i} src={logo} alt="" className="h-8 w-8 rounded-md object-cover" />
            ))}
          </div>

          {/* Powered by Lovable */}
          <div className="flex items-center gap-4">
            <div className="h-px w-12 bg-border" />
            <span className="text-xs font-mono-brand text-muted-foreground uppercase tracking-widest">Powered by</span>
            <img src={logoLovable} alt="Lovable" className="h-10 rounded-lg object-contain" />
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-px h-3/4 bg-border shrink-0" />

      {/* Right content column — agenda */}
      <div className="flex-1 flex flex-col gap-2">
        {agendaItems.map((item, i) => (
          <div key={i} className="relative flex items-center gap-0">
            <div className="flex flex-col items-center w-8 shrink-0 self-stretch">
              <div className={`w-px flex-1 ${i === 0 ? 'bg-transparent' : 'bg-border'}`} />
              <div className={`w-3 h-3 rounded-full shrink-0 ${item.active ? 'bg-primary' : 'bg-muted-foreground/40'}`} />
              <div className={`w-px flex-1 ${i === agendaItems.length - 1 ? 'bg-transparent' : 'bg-border'}`} />
            </div>
            <div className={`flex-1 flex items-center justify-between py-5 px-6 my-1 rounded-lg ${item.active ? 'border border-primary/50 bg-primary/10' : ''}`}>
              <div className="flex items-center gap-8">
                <span className={`font-mono-brand text-base ${item.active ? 'text-primary' : 'text-muted-foreground'}`}>
                  {item.time}
                </span>
                <h3 className="text-2xl font-bold text-foreground">{item.title}</h3>
              </div>
              {item.badge && (
                <span className={`px-3 py-1.5 rounded-full border text-[10px] font-mono-brand uppercase tracking-widest ${item.active ? 'border-primary/50 text-primary' : 'border-border text-muted-foreground'}`}>
                  {item.badge}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </SlideWrapper>
);

export default SlideAgenda;
