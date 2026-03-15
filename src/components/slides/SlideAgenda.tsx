import { SlideWrapper } from './SlideComponents';
import logoVelocity from '@/assets/logo-velocity.jpeg';
import logoBlockchain from '@/assets/logo-blockchain.jpeg';

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
      {/* Left brand column 40% */}
      <div className="flex flex-col items-center justify-center gap-6 w-[40%] shrink-0">
        <img src={logoVelocity} alt="Velocity" className="w-24 h-24 rounded-xl object-cover" />
        <span className="text-muted-foreground font-mono-brand text-3xl">×</span>
        <img src={logoBlockchain} alt="Blockchain Society" className="w-24 h-24 rounded-xl object-cover" />
        <div className="mt-6 text-center">
          <div className="text-sm font-mono-brand text-muted-foreground uppercase tracking-widest">LSE</div>
          <div className="text-4xl font-black tracking-brutal text-foreground">BUILD</div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-px h-3/4 bg-border shrink-0" />

      {/* Right content column ~85% */}
      <div className="flex-1 flex flex-col gap-2">
        {agendaItems.map((item, i) => (
          <div key={i} className="relative flex items-center gap-0">
            {/* Timeline line + dot */}
            <div className="flex flex-col items-center w-8 shrink-0 self-stretch">
              <div className={`w-px flex-1 ${i === 0 ? 'bg-transparent' : 'bg-border'}`} />
              <div className={`w-3 h-3 rounded-full shrink-0 ${item.active ? 'bg-primary' : 'bg-muted-foreground/40'}`} />
              <div className={`w-px flex-1 ${i === agendaItems.length - 1 ? 'bg-transparent' : 'bg-border'}`} />
            </div>

            {/* Content card */}
            <div className={`flex-1 flex items-center justify-between py-6 px-8 my-2 rounded-lg ${item.active ? 'border border-primary/50 bg-primary/10' : ''}`}>
              <div className="flex items-center gap-12">
                <span className={`font-mono-brand text-lg ${item.active ? 'text-primary' : 'text-muted-foreground'}`}>
                  {item.time}
                </span>
                <h3 className="text-3xl font-bold text-foreground">{item.title}</h3>
              </div>
              {item.badge && (
                <span className={`px-4 py-2 rounded-full border text-xs font-mono-brand uppercase tracking-widest ${item.active ? 'border-primary/50 text-primary' : 'border-border text-muted-foreground'}`}>
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
