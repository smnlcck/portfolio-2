"use client";

// Section 5a — the site's one signature spectacle moment. A small white
// geometric mark morphs through three forms (cube → branching glyph inside a
// hexagon → settled hexagon) over ~1.6s, then reveals the page. Swap the
// three <svg> shapes below for a personal monogram if you'd like — the
// crossfade choreography is the reusable part.

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { EASE_STANDARD } from "@/lib/motion";

const SHAPES = [
  // 1. cube outline
  <svg key="cube" width="56" height="56" viewBox="0 0 56 56" fill="none">
    <path
      d="M28 6 L48 17 V39 L28 50 L8 39 V17 Z M28 6 V28 M28 28 L48 17 M28 28 L8 17"
      stroke="white"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  </svg>,
  // 2. organic branching glyph inside a hexagon
  <svg key="branch" width="56" height="56" viewBox="0 0 56 56" fill="none">
    <path
      d="M28 6 L48 17 V39 L28 50 L8 39 V17 Z"
      stroke="white"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path
      d="M28 16 V30 M28 20 L20 26 M28 24 L36 30 M28 30 L22 40 M28 30 L34 40"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>,
  // 3. settled hexagon
  <svg key="hex" width="56" height="56" viewBox="0 0 56 56" fill="none">
    <path
      d="M28 6 L48 17 V39 L28 50 L8 39 V17 Z"
      stroke="white"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <circle cx="28" cy="28" r="4" fill="white" />
  </svg>,
];

export default function Preloader({ onDone }: { onDone: () => void }) {
  const [step, setStep] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const stepMs = 480;
    const timers = SHAPES.map((_, i) =>
      setTimeout(() => setStep(i), stepMs * i)
    );
    const exitTimer = setTimeout(() => setVisible(false), stepMs * SHAPES.length + 200);
    const doneTimer = setTimeout(onDone, stepMs * SHAPES.length + 700);
    return () => {
      timers.forEach(clearTimeout);
      clearTimeout(exitTimer);
      clearTimeout(doneTimer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-bg-dark"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: EASE_STANDARD }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: EASE_STANDARD }}
            >
              {SHAPES[step]}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
