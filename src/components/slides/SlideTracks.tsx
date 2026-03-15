import { SlideWrapper } from './SlideComponents';
import { Cpu, Zap } from 'lucide-react';

const SlideTracks = () => (
  <SlideWrapper>
    <h2 className="text-6xl font-black mb-16 tracking-brutal">Buildathon Tracks</h2>
    <div className="grid grid-cols-2 gap-8">
      <div className="p-12 border border-border bg-secondary/50 hover:border-primary transition-colors duration-400">
        <Cpu className="w-12 h-12 text-primary mb-6" />
        <h3 className="text-3xl font-black mb-4">AI-Powered</h3>
        <p className="text-muted-foreground text-lg leading-relaxed">
          AI/ML-powered applications, agents, and data-driven business insight products. Ask <span className="text-foreground font-bold">Yamin</span> for guidance.
        </p>
      </div>
      <div className="p-12 border border-border bg-secondary/50 hover:border-primary transition-colors duration-400">
        <Zap className="w-12 h-12 text-primary mb-6" />
        <h3 className="text-3xl font-black mb-4">Blockchain</h3>
        <p className="text-muted-foreground text-lg leading-relaxed">
          DeFi, quant systems, fintech, and Web3 tools on Base. Ask <span className="text-foreground font-bold">Kevin</span> for guidance.
        </p>
      </div>
    </div>
  </SlideWrapper>
);

export default SlideTracks;
