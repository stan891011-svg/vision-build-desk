const Section = ({ time, title, children }: { time: string; title: string; children: React.ReactNode }) => (
  <div className="mb-8">
    <div className="flex items-center gap-4 mb-3">
      <span className="bg-primary text-primary-foreground px-3 py-1 font-mono text-sm font-bold shrink-0">{time}</span>
      <h2 className="text-2xl font-black tracking-tight">{title}</h2>
    </div>
    <div className="pl-6 border-l-2 border-primary/30 space-y-2 text-muted-foreground leading-relaxed">
      {children}
    </div>
  </div>
);

const Cue = ({ children }: { children: React.ReactNode }) => (
  <p className="text-primary font-bold uppercase text-sm tracking-wide bg-primary/10 px-3 py-1.5 rounded my-3">
    ⚡ {children}
  </p>
);

const Speaker = ({ name, duration, children }: { name: string; duration?: string; children: React.ReactNode }) => (
  <div className="my-3">
    <div className="flex items-center gap-2 mb-1">
      <span className="font-bold text-foreground">{name}</span>
      {duration && <span className="text-xs font-mono bg-secondary px-2 py-0.5 rounded">{duration}</span>}
    </div>
    <div className="pl-4 space-y-1 text-sm">{children}</div>
  </div>
);

const Notes = () => (
  <div className="min-h-screen bg-background text-foreground p-8 max-w-3xl mx-auto">
    <div className="mb-12">
      <h1 className="text-5xl font-black tracking-tight mb-2">LSE <span className="text-primary">BUILD</span></h1>
      <p className="text-muted-foreground font-mono text-sm">Speaker Notes & Run-of-Show — March 16, 2026</p>
    </div>

    <Section time="5:00 PM" title="Doors Open — Registration & Welcome">
      <p>Participants arrive and check in.</p>
    </Section>

    <Section time="5:10–5:30" title="Opening Ceremony">
      <Speaker name="Yamin" duration="~2 min">
        <p>Introduce Velocity — what we're doing, who we are.</p>
        <p>Mention Lovable credits.</p>
        <p>"Look at the screen for instructions" — QR on display.</p>
      </Speaker>

      <Speaker name="Kevin" duration="~2 min">
        <p>Introduce Blockchain Society.</p>
      </Speaker>

      <p className="text-foreground font-semibold mt-4">Partner Introductions:</p>

      <Speaker name="Lovable" duration="~30 sec">
        <p>"You'll be launching your ideas using Lovable — a huge thank you to them as this wouldn't be possible without them!"</p>
      </Speaker>

      <Speaker name="Headstart" duration="1–2 min">
        <p>They'll introduce themselves.</p>
      </Speaker>

      <Speaker name="Base & Bitget" duration="~30 sec">
        <p>"We'd like to thank Base, an open blockchain platform designed to serve as infrastructure for a global onchain economy, and Bitget, a cryptocurrency exchange serving over 125 million users, for also sponsoring this event."</p>
      </Speaker>

      <Speaker name="Stan" duration="3–5 min">
        <p>The HR side of things.</p>
        <p className="mt-2">Then transition into tracks:</p>
        <ul className="list-disc pl-5 space-y-1 mt-1">
          <li><strong>AI-Powered:</strong> AI/ML-powered applications, agents, and data-driven business insight products.</li>
          <li><strong>Blockchain:</strong> DeFi, quant systems, fintech, and Web3 tools.</li>
        </ul>
        <p className="mt-2">At the end, 6 teams (3 AI, 3 Blockchain) will each have 5 minutes to demo.</p>
        <p>AI questions → Yamin. Blockchain questions → Kevin.</p>
      </Speaker>

      <Cue>Give 5 minutes to find teammates, then it's time to build!</Cue>
    </Section>

    <Section time="5:30 PM" title="Hacking Begins">
      <p>2.5 hours to ship. Clock is ticking.</p>
    </Section>

    <Section time="7:30 PM" title="30-Minute Warning">
      <Cue>Announce: 30 minutes remaining!</Cue>
    </Section>

    <Section time="7:45 PM" title="15-Minute Warning">
      <Cue>Announce: 15 minutes remaining!</Cue>
    </Section>

    <Section time="7:50 PM" title="Final Countdown">
      <Cue>For all participants: you now have 10 minutes to submit!</Cue>
      <p>Put submission info on screen (SlideSubmission).</p>
    </Section>

    <Section time="8:00 PM" title="Submissions Close">
      <p className="text-foreground font-bold">Portal closes. No exceptions.</p>
    </Section>

    <Section time="8:00–8:10" title="Finalist Team Selection">
      <p>Organizers review submissions and select 3 AI teams + 3 Blockchain teams for demos.</p>
    </Section>

    <Section time="8:10 PM" title="Judging & Demos">
      <p className="text-foreground font-semibold mb-2">Announce and thank judges for their attendance and participation.</p>
      <ul className="list-disc pl-5 space-y-1">
        <li>3 Blockchain teams present (5 min each)</li>
        <li>3 AI teams present (5 min each)</li>
      </ul>
      <p className="mt-3">After all demos: 10 minutes for judges to deliberate.</p>
    </Section>

    <Section time="8:50 PM" title="Awards Ceremony">
      <p className="text-foreground font-semibold mb-2">"We will now hear from the judges as they provide feedback for each demo:"</p>
      <div className="space-y-1">
        <p>🥉 3rd place — AI</p>
        <p>🥈 2nd place — AI</p>
        <p>🏆 <strong className="text-foreground">Winner — AI</strong></p>
        <p className="pt-2">🥉 3rd place — Blockchain</p>
        <p>🥈 2nd place — Blockchain</p>
        <p>🏆 <strong className="text-foreground">Winner — Blockchain</strong></p>
      </div>
    </Section>

    <Section time="9:00 PM" title="Closing Remarks">
      <p>Thank you to participants, judges, sponsors, and co-hosts.</p>
      <p className="text-foreground font-bold text-lg mt-2">Goodnight. 🌙</p>
    </Section>
  </div>
);

export default Notes;
