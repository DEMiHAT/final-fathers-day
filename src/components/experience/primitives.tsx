import { motion, AnimatePresence, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState, type ReactNode } from "react";

export function Particles({ count = 28 }: { count?: number }) {
  const seeds = Array.from({ length: count }, (_, i) => i);
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      {seeds.map((i) => {
        const left = (i * 53) % 100;
        const top = (i * 79) % 100;
        const delay = (i % 7) * 0.4;
        const dur = 8 + (i % 5) * 2;
        const size = 2 + (i % 3);
        return (
          <motion.span
            key={i}
            className="absolute rounded-full bg-white/40"
            style={{ left: `${left}%`, top: `${top}%`, width: size, height: size, filter: "blur(0.5px)" }}
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: [0, 0.6, 0], y: [-10, -60, -120] }}
            transition={{ duration: dur, repeat: Infinity, delay, ease: "easeInOut" }}
          />
        );
      })}
    </div>
  );
}

export function GlassButton({
  children,
  onClick,
  variant = "primary",
}: {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "ghost";
}) {
  return (
    <motion.button
      onClick={onClick}
      whileTap={{ scale: 0.96 }}
      whileHover={{ scale: 1.02 }}
      className={
        variant === "primary"
          ? "glass-strong px-8 py-4 rounded-full text-white text-base font-medium tracking-wide shadow-[0_10px_40px_-10px_rgba(255,94,125,0.4)] relative overflow-hidden"
          : "glass-soft px-6 py-3 rounded-full text-white/80 text-sm font-medium"
      }
    >
      <span className="relative z-10">{children}</span>
      {variant === "primary" && (
        <span
          className="absolute inset-0 opacity-60"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,94,125,0.25), transparent 60%, rgba(255,255,255,0.15))",
          }}
        />
      )}
    </motion.button>
  );
}

export function RevealLines({
  lines,
  onDone,
  className = "",
  lineClass = "",
  interval = 1400,
  startDelay = 300,
}: {
  lines: (string | { text: string; pause?: number; accent?: boolean; big?: boolean })[];
  onDone?: () => void;
  className?: string;
  lineClass?: string;
  interval?: number;
  startDelay?: number;
}) {
  const [shown, setShown] = useState(0);
  useEffect(() => {
    setShown(0);
    let cancelled = false;
    let i = 0;
    const step = () => {
      if (cancelled) return;
      const item = lines[i];
      const extra = typeof item === "object" && item.pause ? item.pause : 0;
      const t = setTimeout(() => {
        if (cancelled) return;
        setShown((s) => s + 1);
        i++;
        if (i < lines.length) step();
        else if (onDone) setTimeout(onDone, 800);
      }, (i === 0 ? startDelay : interval) + extra);
      return t;
    };
    step();
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={className}>
      <AnimatePresence>
        {lines.slice(0, shown).map((raw, idx) => {
          const item = typeof raw === "string" ? { text: raw } : raw;
          return (
            <motion.p
              key={idx}
              initial={{ opacity: 0, y: 14, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className={`${lineClass} ${item.accent ? "text-accent" : ""} ${
                item.big ? "font-display text-3xl leading-tight" : ""
              }`}
            >
              {item.text}
            </motion.p>
          );
        })}
      </AnimatePresence>
    </div>
  );
}

export function SectionShell({
  children,
  k,
}: {
  children: ReactNode;
  k: string | number;
}) {
  return (
    <motion.section
      key={k}
      initial={{ opacity: 0, filter: "blur(20px)", scale: 1.02 }}
      animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
      exit={{ opacity: 0, filter: "blur(20px)", scale: 0.98 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 flex flex-col"
    >
      {children}
    </motion.section>
  );
}

export function NextFab({ onClick, label = "Continue" }: { onClick: () => void; label?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.8 }}
      className="absolute bottom-10 left-0 right-0 flex justify-center z-20"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <GlassButton onClick={onClick}>{label} →</GlassButton>
    </motion.div>
  );
}

export function Counter({ to, duration = 1.4 }: { to: number; duration?: number }) {
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.round(v));
  const [val, setVal] = useState(0);
  useEffect(() => {
    const controls = animate(mv, to, { duration, ease: "easeOut" });
    const unsub = rounded.on("change", (v) => setVal(v));
    return () => {
      controls.stop();
      unsub();
    };
  }, [to]);
  return <>{val}</>;
}
