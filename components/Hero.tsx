"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { EASE_STANDARD, SPRING_POP, fadeIn, slideUp, staggerContainer } from "@/lib/motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-bg-dark flex flex-col justify-center px-6 md:px-16 pt-28 pb-16">
      {/* floating hero object — asymmetric, ungrounded, no bounding box */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute right-[-6%] top-[14%] h-[52vh] w-[52vh] max-h-[520px] max-w-[520px]"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1, y: [0, -18, 0] }}
        transition={{
          opacity: { duration: 0.6, ease: EASE_STANDARD, delay: 0.15 },
          scale: { duration: 0.6, ease: EASE_STANDARD, delay: 0.15 },
          y: { duration: 7, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <div
          className="h-full w-full rounded-full opacity-90"
          style={{
            background:
              "radial-gradient(circle at 35% 30%, rgba(198,241,157,0.55), rgba(153,238,255,0.18) 45%, rgba(15,31,16,0) 70%)",
            filter: "blur(2px)",
          }}
        />
        <div className="absolute inset-8 rounded-full border border-white/10" />
        <div className="absolute inset-20 rounded-full border border-primary/30" />
      </motion.div>

      <motion.div
        className="relative z-10 max-w-3xl"
        variants={staggerContainer(0.075)}
        initial="hidden"
        animate="show"
      >
        <motion.p
          variants={fadeIn}
          transition={{ duration: 0.3, ease: EASE_STANDARD }}
          className="text-small text-white/50 font-mono mb-6"
        >
          Portfolio — 2026
        </motion.p>

        <motion.h1
          variants={slideUp}
          transition={{ duration: 0.3, ease: EASE_STANDARD }}
          className="text-display text-paper max-w-2xl"
        >
          Where Design and Engineering Meet
        </motion.h1>

        <motion.p
          variants={slideUp}
          transition={{ duration: 0.3, ease: EASE_STANDARD }}
          className="text-small text-white/60 font-mono mt-6 max-w-md"
        >
          I design and build interfaces — precisely, quietly, and one
          deliberate decision at a time.
        </motion.p>

        <motion.div variants={slideUp} transition={{ duration: 0.3, ease: EASE_STANDARD }} className="mt-10">
          <motion.a
            href="#work"
            whileHover={{ scale: 1.02, filter: "brightness(1.08)" }}
            whileTap={{ scale: 0.98 }}
            transition={SPRING_POP}
            className="inline-flex items-center gap-2 rounded-full bg-primary text-ink text-label px-6 py-3"
          >
            View work
            <ArrowRight size={16} strokeWidth={2} />
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, ease: EASE_STANDARD, delay: 0.8 }}
        className="absolute bottom-8 right-6 md:right-16 text-tiny text-white/40 font-mono"
      >
        Scroll to discover ↓
      </motion.div>
    </section>
  );
}
