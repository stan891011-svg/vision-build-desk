import { SlideWrapper } from './SlideComponents';
import judgeTiffany from '@/assets/judge-tiffany.png';
import judgeJosh from '@/assets/judge-josh.png';

const judges = [
  {
    name: 'Tiffany Pickles',
    role: 'Regional Solutions Partner, EMEA @Meta',
    subtitle: 'ex-Google | AI, Tech & Careers',
    photo: judgeTiffany,
  },
  {
    name: 'Josh Chappatte',
    role: 'Senior Enterprise Account Director',
    subtitle: 'Media & Entertainment @AWS',
    photo: judgeJosh,
  },
  {
    name: 'Clemens Scherf',
    role: 'Bringing the UK & Europe OnChain',
    subtitle: 'Analytics @Coinbase (Base)',
    photo: null,
  },
];

const SlideJudges = () => (
  <SlideWrapper>
    <h2 className="text-6xl font-black mb-16 tracking-brutal">The Judges</h2>
    <div className="grid grid-cols-3 gap-12">
      {judges.map((judge, i) => (
        <div key={i} className="flex flex-col gap-4">
          <div className="aspect-square bg-secondary border border-border rounded-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-400 flex items-center justify-center">
            {judge.photo ? (
              <img src={judge.photo} alt={judge.name} className="w-full h-full object-cover" />
            ) : (
              <span className="text-muted-foreground font-mono-brand text-sm">AWAITING PHOTO</span>
            )}
          </div>
          <div className="font-black text-xl uppercase tracking-brutal">{judge.name}</div>
          <div className="text-primary font-mono-brand text-sm uppercase">{judge.role}</div>
          <div className="text-muted-foreground text-sm">{judge.subtitle}</div>
        </div>
      ))}
    </div>
  </SlideWrapper>
);

export default SlideJudges;
