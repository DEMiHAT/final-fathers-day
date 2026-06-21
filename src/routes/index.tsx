import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Opening,
  Unlock,
  LittlePrincess,
  NeverSaw,
  MemoryCards,
  GrowingUp,
  GlassChat,
  Builder,
  ThingsYouLove,
  Letters,
  FinalLetter,
  Finale,
} from "@/components/experience/sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "For Daddy — A Father's Day Keepsake" },
      {
        name: "description",
        content: "A daughter's letter to her father, Mr. Gopinath. A liquid-glass keepsake.",
      },
      { property: "og:title", content: "For Daddy — A Father's Day Keepsake" },
      {
        property: "og:description",
        content: "A daughter's letter to her father, Mr. Gopinath.",
      },
    ],
  }),
  component: Experience,
});

function Experience() {
  const [step, setStep] = useState(0);
  const next = () => setStep((s) => s + 1);
  const replay = () => setStep(0);

  const sections = [
    <Opening key="0" next={next} />,
    <Unlock key="1" next={next} />,
    <LittlePrincess key="2" next={next} />,
    <NeverSaw key="3" next={next} />,
    <MemoryCards key="4" next={next} />,
    <GrowingUp key="5" next={next} />,
    <GlassChat key="6" next={next} />,
    <Builder key="7" next={next} />,
    <ThingsYouLove key="8" next={next} />,
    <Letters key="9" next={next} />,
    <FinalLetter key="10" next={next} />,
    <Finale key="11" replay={replay} />,
  ];

  return (
    <main className="relative min-h-[100dvh] w-full overflow-hidden text-white">
      {/* Progress dots */}
      <div className="fixed top-3 left-0 right-0 z-50 flex justify-center gap-1.5 pt-[env(safe-area-inset-top)]">
        {sections.map((_, i) => (
          <span
            key={i}
            className={`h-1 rounded-full transition-all duration-500 ${
              i === step ? "w-6 bg-white/80" : i < step ? "w-1.5 bg-white/40" : "w-1.5 bg-white/15"
            }`}
          />
        ))}
      </div>
      <AnimatePresence mode="wait">{sections[step]}</AnimatePresence>
    </main>
  );
}
