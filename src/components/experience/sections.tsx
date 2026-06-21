import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { GlassButton, NextFab, Particles, RevealLines, SectionShell } from "./primitives";
import photo1 from "@/assets/photo1.jpg";
import photo2 from "@/assets/photo2.jpg";
import photo3 from "@/assets/photo3.jpg";
import rollsRoyceLogo from "@/assets/rolls-royce.svg";
import landRoverLogo from "@/assets/land-rover.svg";

/* 0 — Opening */
export function Opening({ next }: { next: () => void }) {
  const [done, setDone] = useState(false);
  return (
    <SectionShell k="opening">
      <Particles />
      {/* Breathing pet-name watermark */}
      <motion.p
        aria-hidden
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: [0.05, 0.12, 0.05], scale: [1, 1.06, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute inset-0 flex items-center justify-center font-display text-[34vw] text-[#FF5E7D] select-none"
      >
        Pattu
      </motion.p>
      <div className="relative flex-1 flex flex-col items-center justify-center px-8 text-center">
        <RevealLines
          interval={1600}
          onDone={() => setDone(true)}
          className="space-y-6 max-w-md"
          lines={[
            { text: "Daddy…", big: true },
            { text: "Or should I say…" },
            { text: "Mr. Gopi ❤️", big: true, accent: true },
            { text: "I made something for you." },
            { text: '"Cheppu ra Pattu," you always say.', accent: true },
            { text: "So this time… let me tell you everything." },
          ]}
          lineClass="text-white/90 text-xl font-light leading-relaxed"
        />
      </div>
      {done && <NextFab onClick={next} />}
    </SectionShell>
  );
}

/* 1 — Fingerprint unlock */
export function Unlock({ next }: { next: () => void }) {
  const [pressed, setPressed] = useState(false);
  return (
    <SectionShell k="unlock">
      <div className="flex-1 flex flex-col items-center justify-center px-8 text-center gap-12">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.9 }}
          className="font-display text-2xl text-white/85"
        >
          Touch to unlock our memories.
        </motion.p>
        <motion.button
          onClick={() => {
            if (pressed) return;
            setPressed(true);
            setTimeout(next, 1600);
          }}
          whileTap={{ scale: 0.92 }}
          className="relative w-44 h-44 rounded-full glass-strong flex items-center justify-center"
        >
          {pressed && (
            <>
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  initial={{ scale: 1, opacity: 0.5 }}
                  animate={{ scale: 3, opacity: 0 }}
                  transition={{ duration: 1.4, delay: i * 0.2, ease: "easeOut" }}
                  className="absolute inset-0 rounded-full border border-[#FF5E7D]/60"
                />
              ))}
            </>
          )}
          <motion.svg
            viewBox="0 0 64 64"
            className="w-24 h-24"
            animate={pressed ? { filter: "drop-shadow(0 0 24px #FF5E7D)" } : {}}
            transition={{ duration: 0.8 }}
          >
            <g fill="none" stroke={pressed ? "#FF5E7D" : "rgba(255,255,255,0.7)"} strokeWidth="1.5" strokeLinecap="round">
              <path d="M20 38c0-8 5-14 12-14s12 6 12 14v6" />
              <path d="M24 42c0-6 3-10 8-10s8 4 8 10v4" />
              <path d="M28 46c0-4 2-6 4-6s4 2 4 6" />
              <path d="M16 32c2-10 8-16 16-16s14 6 16 16" />
              <path d="M14 26c4-8 10-12 18-12s14 4 18 12" />
            </g>
          </motion.svg>
        </motion.button>
        <p className="text-white/40 text-xs tracking-[0.3em] uppercase">Hold to scan</p>
      </div>
    </SectionShell>
  );
}

/* 2 — His Pattu (Photo 1) */
export function LittlePrincess({ next }: { next: () => void }) {
  const [done, setDone] = useState(false);
  return (
    <SectionShell k="princess">
      <motion.div
        initial={{ scale: 1.15 }}
        animate={{ scale: 1.35 }}
        transition={{ duration: 24, ease: "linear" }}
        className="absolute inset-0"
      >
        <img src={photo1} alt="Daddy with his Pattu, 2016" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/85" />
      </motion.div>

      <div className="relative flex-1 flex flex-col justify-end p-6 pb-32">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.9 }}
          className="glass-strong px-5 py-3 self-start rounded-full mb-5"
        >
          <p className="text-sm text-white/90">With my Pattu ❤️</p>
        </motion.div>
        <RevealLines
          interval={1500}
          onDone={() => setDone(true)}
          className="space-y-3 glass p-5 max-w-sm"
          lineClass="text-white/90 text-base leading-relaxed"
          lines={[
            "I don't remember every toy.",
            "I don't remember every trip.",
            "I don't remember every gift.",
            { text: "But I remember feeling safe.", accent: true },
            "Because you were there.",
            "Back then I thought you were just my father.",
            "Today I know you were also my protector. My guide. My safe place.",
          ]}
        />
      </div>
      {done && <NextFab onClick={next} />}
    </SectionShell>
  );
}

/* 3 — Things I Never Saw */
export function NeverSaw({ next }: { next: () => void }) {
  const [done, setDone] = useState(false);
  return (
    <SectionShell k="neversaw">
      <div className="flex-1 flex flex-col items-center justify-center px-8 text-center">
        <RevealLines
          interval={1300}
          onDone={() => setDone(true)}
          className="space-y-4 max-w-md"
          lineClass="text-white/85 text-lg font-light"
          lines={[
            "I never saw the pressure.",
            "I never saw the stress.",
            "I never saw the sacrifices.",
            "I never saw the sleepless nights.",
            { text: "Because you never let me.", accent: true },
            "Everyone sees the industrialist.",
            "The businessman. The leader.",
            { text: "I see Daddy.", big: true },
            { text: "You carried burdens so I could carry dreams.", big: true, accent: true },
          ]}
        />
      </div>
      {done && <NextFab onClick={next} />}
    </SectionShell>
  );
}

/* 4 — Memory Cards (Wallet style) */
const CARDS = [
  { title: "Love", emoji: "❤️", grad: "from-[#FF5E7D] to-[#5a1a2a]" },
  { title: "Protection", emoji: "🛡️", grad: "from-[#3a6ea5] to-[#0f2545]" },
  { title: "Education", emoji: "🎓", grad: "from-[#7a5af8] to-[#2a1f55]" },
  { title: "Confidence", emoji: "✨", grad: "from-[#d4a44a] to-[#3a2a10]" },
  { title: "Opportunities", emoji: "🌎", grad: "from-[#2da58e] to-[#0e2f29]" },
  { title: "A Future", emoji: "🌟", grad: "from-[#e85d3a] to-[#3a160c]" },
];

export function MemoryCards({ next }: { next: () => void }) {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const done = index >= CARDS.length;

  const advance = () => {
    if (done) return;
    if (!flipped) {
      setFlipped(true);
      return;
    }
    setFlipped(false);
    setIndex((i) => i + 1);
  };

  const progress = Math.min(index + (flipped ? 1 : 0), CARDS.length) / CARDS.length;

  return (
    <SectionShell k="cards">
      <div className="flex-1 flex flex-col px-6 pt-16 pb-32">
        <motion.h2
          initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-3xl text-white text-center"
        >
          Everything you gave me
        </motion.h2>
        <p className="text-white/45 text-[10px] uppercase tracking-[0.3em] text-center mt-3">
          {done ? "All revealed" : `${index + 1} of ${CARDS.length} · Tap card`}
        </p>

        <div className="mt-5 mx-auto w-40 h-[2px] rounded-full bg-white/10 overflow-hidden">
          <motion.div
            className="h-full bg-[#FF5E7D]"
            animate={{ width: `${progress * 100}%` }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>

        <div className="relative flex-1 flex items-center justify-center mt-6">
          <div className="relative w-full max-w-[320px] h-[420px]" style={{ perspective: 1400 }}>
            <AnimatePresence>
              {!done &&
                CARDS.slice(index, index + 3)
                  .map((c, offset) => {
                    const realIndex = index + offset;
                    const isTop = offset === 0;
                    return (
                      <motion.button
                        key={realIndex}
                        onClick={isTop ? advance : undefined}
                        initial={{ opacity: 0, y: 80, scale: 0.88 }}
                        animate={{
                          opacity: 1,
                          y: offset * 14,
                          scale: 1 - offset * 0.05,
                          zIndex: 10 - offset,
                        }}
                        exit={{
                          opacity: 0,
                          y: -140,
                          scale: 0.85,
                          rotateZ: -6,
                          filter: "blur(14px)",
                          transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
                        }}
                        transition={{ type: "spring", stiffness: 180, damping: 24, mass: 0.9 }}
                        whileTap={isTop ? { scale: 0.98 } : undefined}
                        style={{
                          transformStyle: "preserve-3d",
                          pointerEvents: isTop ? "auto" : "none",
                        }}
                        className="absolute inset-0 rounded-[28px] text-left"
                      >
                        <motion.div
                          className="relative w-full h-full rounded-[28px]"
                          style={{ transformStyle: "preserve-3d" }}
                          animate={{ rotateY: isTop && flipped ? 180 : 0 }}
                          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                        >
                          {/* Front */}
                          <div
                            className={`absolute inset-0 rounded-[28px] overflow-hidden bg-gradient-to-br ${c.grad} border border-white/15 p-6 flex flex-col justify-between`}
                            style={{
                              backfaceVisibility: "hidden",
                              WebkitBackfaceVisibility: "hidden",
                              boxShadow:
                                "0 30px 80px -30px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.15)",
                            }}
                          >
                            <div
                              className="absolute inset-0 opacity-60 pointer-events-none"
                              style={{
                                background:
                                  "radial-gradient(120% 80% at 20% 0%, rgba(255,255,255,0.28), transparent 55%)",
                              }}
                            />
                            <div className="relative flex items-start justify-between">
                              <div>
                                <p className="text-white/60 text-[10px] uppercase tracking-[0.3em]">
                                  Memory · 0{realIndex + 1}
                                </p>
                                <p className="font-display text-4xl text-white mt-3">{c.title}</p>
                              </div>
                              <span className="text-4xl drop-shadow-lg">{c.emoji}</span>
                            </div>
                            <p className="relative text-white/70 text-[10px] uppercase tracking-[0.3em]">
                              Tap to reveal
                            </p>
                          </div>
                          {/* Back */}
                          <div
                            className={`absolute inset-0 rounded-[28px] overflow-hidden bg-gradient-to-tl ${c.grad} border border-white/20 p-7 flex flex-col justify-center`}
                            style={{
                              backfaceVisibility: "hidden",
                              WebkitBackfaceVisibility: "hidden",
                              transform: "rotateY(180deg)",
                              boxShadow:
                                "0 30px 80px -30px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.2)",
                            }}
                          >
                            <div className="absolute inset-0 bg-black/30" />
                            <div className="relative">
                              <span className="text-5xl">{c.emoji}</span>
                              <p className="font-display text-3xl text-white mt-4">{c.title}</p>
                              <p className="text-white/90 text-base leading-relaxed mt-3">
                                You gave me {c.title.toLowerCase()} — quietly, every single day.
                              </p>
                              <p className="text-white/55 text-[10px] uppercase tracking-[0.3em] mt-6">
                                Tap to continue
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      </motion.button>
                    );
                  })
                  .reverse()}
            </AnimatePresence>

            {done && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95, filter: "blur(12px)" }}
                animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 flex flex-col items-center justify-center text-center glass-strong p-8"
              >
                <p className="text-white/60 text-[10px] uppercase tracking-[0.3em]">And in the end</p>
                <p className="font-display text-4xl text-white mt-4 leading-tight">
                  Everything<br />he could.
                </p>
                <span className="text-accent text-2xl mt-5">❤️</span>
              </motion.div>
            )}
          </div>
        </div>
      </div>
      {done && <NextFab onClick={next} />}
    </SectionShell>
  );
}

/* 5 — Growing Up (Photo 2) */
export function GrowingUp({ next }: { next: () => void }) {
  const [done, setDone] = useState(false);
  return (
    <SectionShell k="growing">
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
      >
        <img src={photo2} alt="Family today" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/90" />
      </motion.div>
      <div className="relative flex-1 flex flex-col justify-end p-6 pb-32">
        {/* timeline */}
        <div className="glass-soft px-4 py-3 mb-5 self-stretch">
          <div className="flex items-center gap-3 text-[10px] uppercase tracking-widest text-white/60">
            <span>Childhood</span>
            <div className="flex-1 h-px bg-white/20 relative overflow-hidden">
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 3, ease: "easeInOut" }}
                className="absolute inset-y-0 left-0 bg-[#FF5E7D]"
              />
            </div>
            <span>Today</span>
          </div>
        </div>
        <RevealLines
          interval={1500}
          onDone={() => setDone(true)}
          className="space-y-3 glass p-5"
          lineClass="text-white/90 text-base leading-relaxed"
          lines={[
            "Somewhere between these moments… I grew up.",
            "But you never stopped taking care of me.",
            "I stopped holding your hand. Yet somehow… you kept holding my life together.",
            { text: "The world knew you as Mr. Gopinath.", accent: true },
            "I was lucky enough to know you as Daddy.",
          ]}
        />
      </div>
      {done && <NextFab onClick={next} />}
    </SectionShell>
  );
}

/* 6 — Glass Chat */
type Msg = { from: "d" | "f"; text: string };
const CHAT: Msg[] = [
  { from: "d", text: "Daddy?" },
  { from: "f", text: "Cheppu ra Pattu 🥰" },
  { from: "d", text: "Can I ask you something?" },
  { from: "f", text: "Anything, Pattu." },
  { from: "d", text: "Why do dads worry so much?" },
  { from: "f", text: "Because daughters are precious. ❤️" },
  { from: "d", text: "Did I ever thank you properly?" },
  { from: "f", text: "For what?" },
  { from: "d", text: "The sacrifices. The support. The protection. The love." },
  { from: "f", text: "You never needed to." },
  { from: "d", text: "I still want to. ❤️" },
  { from: "d", text: "Thank you, Mr. Gopi." },
  { from: "f", text: "Mr. Gopi ah? 😄 Cheppu ra Pattu, em kavali?" },
  { from: "d", text: "Nothing else, Daddy. Just you. ❤️" },
];

export function GlassChat({ next }: { next: () => void }) {
  const [count, setCount] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (count >= CHAT.length) return;
    const t = setTimeout(() => setCount((c) => c + 1), count === 0 ? 600 : 1300);
    return () => clearTimeout(t);
  }, [count]);
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: 9999, behavior: "smooth" });
  }, [count]);
  const done = count >= CHAT.length;
  return (
    <SectionShell k="chat">
      <div className="pt-12 pb-2 px-5 text-center">
        <p className="text-white/50 text-xs uppercase tracking-widest">Messages</p>
        <p className="font-display text-2xl text-white mt-1">Daddy</p>
        <p className="text-accent/80 text-xs mt-0.5 italic">saved you as "Pattu ❤️"</p>
      </div>
      <div ref={scrollRef} className="flex-1 overflow-y-auto no-scrollbar px-4 pb-36 space-y-2">
        {CHAT.slice(0, count).map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className={`flex ${m.from === "d" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[78%] px-4 py-2.5 rounded-3xl text-[15px] leading-snug ${
                m.from === "d"
                  ? "bg-[#FF5E7D]/85 text-white rounded-br-md"
                  : "glass text-white/90 rounded-bl-md"
              }`}
              style={{ backdropFilter: "blur(20px)" }}
            >
              {m.text}
            </div>
          </motion.div>
        ))}
        {!done && (
          <div className="flex justify-start">
            <div className="glass px-4 py-3 rounded-3xl flex gap-1">
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  className="w-1.5 h-1.5 rounded-full bg-white/60"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1, repeat: Infinity, delay: i * 0.15 }}
                />
              ))}
            </div>
          </div>
        )}
      </div>
      {done && <NextFab onClick={next} />}
    </SectionShell>
  );
}

/* 7 — The Builder */
export function Builder({ next }: { next: () => void }) {
  const [done, setDone] = useState(false);
  return (
    <SectionShell k="builder">
      <div className="flex-1 flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="glass-strong p-8 max-w-sm w-full relative"
          style={{ boxShadow: "0 0 80px -20px rgba(255,94,125,0.4)" }}
        >
          <motion.div
            className="absolute -inset-px rounded-[28px] pointer-events-none"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,94,125,0.4), transparent 50%, rgba(255,255,255,0.2))",
              opacity: 0.5,
            }}
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <p className="text-white/50 text-xs uppercase tracking-[0.3em]">A title for you</p>
          <p className="font-display text-4xl text-white mt-2">The Builder</p>
          <div className="mt-6">
            <RevealLines
              interval={1200}
              onDone={() => setDone(true)}
              className="space-y-3"
              lineClass="text-white/85 text-base leading-relaxed"
              lines={[
                "Some people build factories.",
                "Some people build companies.",
                "Some people build industries.",
                { text: "You built a family.", accent: true, big: true },
                "And that will always be your greatest achievement.",
              ]}
            />
          </div>
        </motion.div>
      </div>
      {done && <NextFab onClick={next} />}
    </SectionShell>
  );
}

/* 8 — Things You Love */
export function ThingsYouLove({ next }: { next: () => void }) {
  const [stage, setStage] = useState(0); // 0 RR, 1 Defender, 2 merged
  return (
    <SectionShell k="love">
      <div className="flex-1 flex flex-col items-center justify-center px-5 gap-5">
        <AnimatePresence mode="wait">
          {stage === 0 && (
            <motion.div
              key="rr"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className="glass-strong p-7 w-full max-w-sm"
            >
              <RRIcon />
              <p className="text-white/50 text-xs uppercase tracking-widest mt-4">Card · 01</p>
              <p className="font-display text-3xl text-white mt-1">Rolls-Royce</p>
              <div className="mt-4 space-y-2 text-white/85 text-[15px] leading-relaxed">
                <p>People see luxury.</p>
                <p>I see ambition.</p>
                <p>I see hard work.</p>
                <p>I see someone who taught me that dreams are worth chasing.</p>
              </div>
            </motion.div>
          )}
          {stage === 1 && (
            <motion.div
              key="def"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className="glass-strong p-7 w-full max-w-sm"
            >
              <DefenderIcon />
              <p className="text-white/50 text-xs uppercase tracking-widest mt-4">Card · 02</p>
              <p className="font-display text-3xl text-white mt-1">Defender</p>
              <div className="mt-4 space-y-2 text-white/85 text-[15px] leading-relaxed">
                <p>People see strength.</p>
                <p>I see protection.</p>
                <p>I see the man who always stood between me and every problem.</p>
              </div>
            </motion.div>
          )}
          {stage === 2 && (
            <motion.div
              key="merge"
              initial={{ opacity: 0, scale: 0.9, filter: "blur(20px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 1 }}
              className="glass-strong p-8 w-full max-w-sm text-center"
              style={{ boxShadow: "0 0 80px -20px rgba(255,94,125,0.5)" }}
            >
              <p className="text-white/50 text-xs uppercase tracking-[0.3em]">Together</p>
              <p className="font-display text-5xl text-white mt-2">Daddy</p>
              <div className="mt-5 space-y-2 text-white/85 text-base leading-relaxed">
                <p>RR represents the dream.</p>
                <p>Defender represents the strength.</p>
                <p className="text-accent">You are the reason I believe in both.</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div className="flex gap-2">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={`h-1 rounded-full transition-all ${
                i === stage ? "w-8 bg-[#FF5E7D]" : "w-2 bg-white/25"
              }`}
            />
          ))}
        </div>
      </div>
      <div className="absolute bottom-10 left-0 right-0 flex justify-center z-20" style={{ paddingBottom: "env(safe-area-inset-bottom)" }}>
        {stage < 2 ? (
          <GlassButton onClick={() => setStage((s) => s + 1)}>Next card →</GlassButton>
        ) : (
          <GlassButton onClick={next}>Continue →</GlassButton>
        )}
      </div>
    </SectionShell>
  );
}

function RRIcon() {
  return (
    <img
      src={rollsRoyceLogo}
      alt="Rolls-Royce Logo"
      className="w-20 h-20 object-contain brightness-0 invert opacity-80"
    />
  );
}
function DefenderIcon() {
  return (
    <img
      src={landRoverLogo}
      alt="Land Rover Logo"
      className="w-32 h-12 object-contain brightness-0 invert opacity-80"
    />
  );
}

/* 9 — Letters Never Sent */
const LETTERS = [
  "Thank you for always making me feel safe.",
  "Thank you for working hard even when I never noticed.",
  "Thank you for believing in me before I believed in myself.",
];
const FINAL_LETTER = `Dear Daddy,

I know I don't always say these things.
Sometimes life gets busy.
Sometimes I get distracted.
Sometimes I assume you already know.

But every time you said "Cheppu ra Pattu,"
you taught me that my voice mattered to you.

So here it is, out loud:
I am so grateful to be your daughter.

Thank you for every sacrifice.
Thank you for every lesson.
Thank you for every dream you carried for our family.

Happy Father's Day ❤️
— Your Pattu`;

export function Letters({ next }: { next: () => void }) {
  const [open, setOpen] = useState<number | null>(null);
  const [finalOpen, setFinalOpen] = useState(false);
  const allRead = LETTERS.every((_, i) => i === open || true); // visual cue only
  const [read, setRead] = useState<number[]>([]);
  return (
    <SectionShell k="letters">
      <div className="flex-1 overflow-y-auto no-scrollbar px-5 pt-14 pb-40">
        <p className="text-white/50 text-xs uppercase tracking-widest text-center">A small collection</p>
        <h2 className="font-display text-3xl text-white text-center mt-1">Things I Never Said Out Loud</h2>
        <p className="text-white/50 text-sm text-center mt-2">Tap an envelope to open</p>

        <div className="mt-8 space-y-4">
          {LETTERS.map((text, i) => {
            const isOpen = open === i;
            return (
              <motion.button
                key={i}
                onClick={() => {
                  setOpen(isOpen ? null : i);
                  setRead((r) => (r.includes(i) ? r : [...r, i]));
                }}
                whileTap={{ scale: 0.98 }}
                className="block w-full text-left glass overflow-hidden"
              >
                <div className="p-5 flex items-center gap-4">
                  <EnvelopeIcon open={isOpen} />
                  <div className="flex-1">
                    <p className="text-white/50 text-[10px] uppercase tracking-widest">Letter {i + 1}</p>
                    <p className="text-white/80 text-sm mt-0.5">{isOpen ? "Opened" : "Tap to open"}</p>
                  </div>
                </div>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-white/90 font-display text-lg leading-relaxed">{text}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            );
          })}
        </div>

        {read.length === LETTERS.length && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-10"
          >
            <motion.button
              onClick={() => setFinalOpen(true)}
              whileTap={{ scale: 0.98 }}
              className="block w-full text-left glass-strong p-6"
              style={{ boxShadow: "0 0 60px -20px rgba(255,94,125,0.5)" }}
            >
              <div className="flex items-center gap-4">
                <EnvelopeIcon open={finalOpen} accent />
                <div>
                  <p className="text-accent text-[10px] uppercase tracking-widest">One Last Letter</p>
                  <p className="font-display text-xl text-white mt-1">
                    {finalOpen ? "For my Daddy" : "Tap to open"}
                  </p>
                </div>
              </div>
              <AnimatePresence>
                {finalOpen && (
                  <motion.pre
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    className="mt-5 whitespace-pre-wrap font-display text-base text-white/90 leading-relaxed overflow-hidden"
                  >
                    {FINAL_LETTER}
                  </motion.pre>
                )}
              </AnimatePresence>
            </motion.button>
          </motion.div>
        )}
      </div>
      {finalOpen && <NextFab onClick={next} />}
    </SectionShell>
  );
}

function EnvelopeIcon({ open, accent }: { open: boolean; accent?: boolean }) {
  const color = accent ? "#FF5E7D" : "rgba(255,255,255,0.8)";
  return (
    <svg viewBox="0 0 48 36" className="w-12 h-9">
      <rect x="2" y="6" width="44" height="28" rx="3" fill="none" stroke={color} strokeWidth="1.5" />
      <motion.path
        d="M2 8l22 16L46 8"
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        animate={open ? { d: "M2 8l22 -2L46 8" } : { d: "M2 8l22 16L46 8" }}
        transition={{ duration: 0.6 }}
      />
    </svg>
  );
}

/* 10 — Final Letter (Photo 3) */
export function FinalLetter({ next }: { next: () => void }) {
  return (
    <SectionShell k="final">
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <img src={photo3} alt="Daddy and his Pattu on her special day" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/85" />
      </motion.div>
      <div className="relative flex-1 flex items-center justify-center p-5 pt-20 pb-32 overflow-y-auto no-scrollbar">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2 }}
          className="glass-strong p-6 max-w-sm w-full"
        >
          <p className="text-accent text-[10px] uppercase tracking-[0.3em]">A letter for you</p>
          <p className="font-display text-2xl text-white mt-2">Dear Daddy,</p>
          <div className="mt-4 space-y-3 text-white/90 text-[15px] leading-relaxed font-display">
            <p>The older I get, the more I understand.</p>
            <p>I understand the sacrifices. The worries. The love hidden behind your discipline.</p>
            <p>Every opportunity I have today exists because of what you did yesterday.</p>
            <p>Thank you for believing in me before I believed in myself.</p>
            <p>Thank you for giving me a life filled with love.</p>
            <p>Thank you for being my father.</p>
            <p className="text-white">I am proud to be your daughter.</p>
            <p>The world may know you as Mr. Gopinath.</p>
            <p className="text-accent text-lg">But my favorite title will always be… Daddy.</p>
            <p className="pt-2">Happy Father's Day ❤️</p>
            <p className="text-white/60 text-sm italic">— Your Pattu</p>
          </div>
        </motion.div>
      </div>
      <NextFab onClick={next} label="One last thing" />
    </SectionShell>
  );
}

/* 11 — Finale */
export function Finale({ replay }: { replay: () => void }) {
  const [stage, setStage] = useState(0);
  useEffect(() => {
    const timers = [
      setTimeout(() => setStage(1), 2000), // morph to photo3
      setTimeout(() => setStage(2), 4500), // first text
      setTimeout(() => setStage(3), 9000), // big text
      setTimeout(() => setStage(4), 12500), // final
      setTimeout(() => setStage(5), 15500), // button
    ];
    return () => timers.forEach(clearTimeout);
  }, []);
  return (
    <SectionShell k="finale">
      <div className="absolute inset-0">
        <motion.img
          src={photo1}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          animate={{ opacity: stage >= 1 ? 0 : 1, filter: stage >= 1 ? "blur(30px)" : "blur(0px)", scale: stage >= 1 ? 1.2 : 1 }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
        />
        <motion.img
          src={photo3}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0, filter: "blur(30px)", scale: 1.2 }}
          animate={{ opacity: stage >= 1 ? 1 : 0, filter: stage >= 1 ? "blur(0px)" : "blur(30px)", scale: stage >= 1 ? 1.05 : 1.2 }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 bg-black/65" />
      </div>

      {stage >= 5 && <Confetti />}

      <div className="relative flex-1 flex flex-col items-center justify-center px-8 text-center gap-4">
        <AnimatePresence>
          {stage >= 2 && stage < 3 && (
            <motion.div
              key="t1"
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, filter: "blur(10px)" }}
              transition={{ duration: 1 }}
              className="space-y-2 text-white/90 text-lg font-light"
            >
              <p>You carried me when I couldn't walk.</p>
              <p>Guided me when I was lost.</p>
              <p>Believed in me when I doubted myself.</p>
              <p>Loved me through every stage of my life.</p>
            </motion.div>
          )}
          {stage >= 3 && stage < 4 && (
            <motion.div
              key="t2"
              initial={{ opacity: 0, scale: 0.9, filter: "blur(20px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, filter: "blur(20px)" }}
              transition={{ duration: 1 }}
              className="font-display text-4xl text-white space-y-1"
            >
              <p>Industrialist.</p>
              <p>Leader.</p>
              <p>Builder.</p>
              <p>Dreamer.</p>
            </motion.div>
          )}
          {stage >= 4 && (
            <motion.div
              key="t3"
              initial={{ opacity: 0, scale: 0.85, filter: "blur(20px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.4 }}
              className="space-y-4"
            >
              <p className="text-white/80 text-lg font-light">But to me…</p>
              <p className="font-display text-6xl text-white">
                DADDY <span className="text-accent">❤️</span>
              </p>
              <p className="text-accent/90 font-display text-2xl mt-3 italic">Cheppu ra Pattu</p>
              <p className="text-white/70 text-base mt-6 max-w-xs mx-auto">
                No matter how old I become… I will always be your Pattu.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {stage >= 5 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="absolute bottom-10 left-0 right-0 flex flex-col items-center gap-5 z-30"
          style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
        >
          <GlassButton onClick={replay}>↻ Replay Journey</GlassButton>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1.2 }}
            className="text-white/55 text-xs tracking-[0.25em] uppercase font-light"
          >
            Made with <span className="text-accent">❤</span> by Sreelekha
          </motion.p>
        </motion.div>
      )}
    </SectionShell>
  );
}

function Confetti() {
  const pieces = Array.from({ length: 40 }, (_, i) => i);
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-20">
      {pieces.map((i) => {
        const left = (i * 37) % 100;
        const delay = (i % 10) * 0.15;
        const dur = 4 + (i % 4);
        const color = i % 3 === 0 ? "#FF5E7D" : i % 3 === 1 ? "rgba(255,255,255,0.8)" : "#FFD27F";
        return (
          <motion.span
            key={i}
            className="absolute top-[-10px] rounded-sm"
            style={{ left: `${left}%`, width: 4, height: 8, background: color }}
            initial={{ y: -20, opacity: 0, rotate: 0 }}
            animate={{ y: "110vh", opacity: [0, 1, 1, 0], rotate: 360 }}
            transition={{ duration: dur, delay, ease: "easeIn", repeat: Infinity, repeatDelay: 2 }}
          />
        );
      })}
    </div>
  );
}
