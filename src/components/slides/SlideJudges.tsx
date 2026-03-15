import { SlideWrapper } from './SlideComponents';

const judges = [
  {
    name: 'Tiffany Pickles',
    role: 'Regional Solutions Partner, EMEA @Meta',
    subtitle: 'ex-Google | AI, Tech & Careers',
    hasPhoto: true,
  },
  {
    name: 'Josh Chappatte',
    role: 'Senior Enterprise Account Director',
    subtitle: 'Media & Entertainment @AWS',
    hasPhoto: true,
  },
  {
    name: 'Clemens Scherf',
    role: 'Bringing the UK & Europe OnChain',
    subtitle: 'Analytics @Coinbase (Base)',
    hasPhoto: false,
  },
];

const SlideJudges = () => (
  <SlideWrapper>
    <h2 className="text-6xl font-black mb-16 tracking-brutal">The Judges</h2>
    <div className="grid grid-cols-3 gap-12">
      {judges.map((judge, i) => (
        <div key={i} className="flex flex-col gap-4">
          <div className="aspect-square bg-secondary border border-border rounded grayscale hover:grayscale-0 transition-all duration-400 flex items-center justify-center">
            <span className="text-muted-foreground font-mono-brand text-sm">
              {judge.hasPhoto ? 'PHOTO' : 'AWAITING PHOTO'}
            </span>
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
