import { SlideWrapper, Badge } from './SlideComponents';
import logoLovable from '@/assets/logo-lovable-full.jpeg';

const SlideLovable = () => (
  <SlideWrapper>
    <div className="flex h-full items-center gap-12">
      {/* Left — branding */}
      <div className="flex flex-col w-[45%] shrink-0">
        <Badge>Title Sponsor</Badge>
        <div className="flex items-center gap-6 mt-6 mb-6">
          <img src={logoLovable} alt="Lovable" className="h-16 rounded-lg object-contain" />
          <h2 className="text-6xl font-black tracking-brutal">Lovable</h2>
        </div>
        <p className="text-xl text-muted-foreground leading-relaxed">
          The world's fastest AI app builder. You'll be launching your ideas using Lovable tonight.
        </p>
      </div>

      {/* Divider */}
      <div className="w-px h-3/4 bg-border shrink-0" />

      {/* Right — how to redeem */}
      <div className="flex-1 flex flex-col gap-6">
        <h3 className="text-3xl font-black">How to get started</h3>

        <div className="space-y-3">
          <div className="flex items-start gap-4">
            <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shrink-0">1</span>
            <p className="text-lg text-muted-foreground">Go to <span className="text-foreground font-bold">lovable.dev</span></p>
          </div>
          <div className="flex items-start gap-4">
            <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shrink-0">2</span>
            <p className="text-lg text-muted-foreground">Create an account or sign in → go to <span className="text-foreground font-bold">Settings → Plans & Credits</span></p>
          </div>
          <div className="flex items-start gap-4">
            <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shrink-0">3</span>
            <p className="text-lg text-muted-foreground">Select <span className="text-foreground font-bold">Pro Plan 1</span> (100 credits). Choose the <span className="text-foreground font-bold">monthly</span> plan.</p>
          </div>
          <div className="flex items-start gap-4">
            <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shrink-0">4</span>
            <p className="text-lg text-muted-foreground">At checkout, enter discount code:</p>
          </div>
        </div>

        <div className="bg-primary/10 border border-primary/50 rounded-lg px-8 py-5 text-center">
          <span className="text-5xl font-black font-mono-brand text-primary tracking-widest">LSE78921</span>
        </div>

        <p className="text-sm text-muted-foreground italic">
          Free Pro Plan 1 ($25 value). Redeem by end of event only. Do not share outside this event.
        </p>
      </div>
    </div>
  </SlideWrapper>
);

export default SlideLovable;
