"use client";

import { motion } from "framer-motion";
import { EASE_STANDARD, slideUp, viewportOnce } from "@/lib/motion";

export default function Intro() {
  return (
    <section className="bg-bg-dark px-6 md:px-16 py-30 md:py-50">
      <motion.p
        variants={slideUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        transition={{ duration: 0.3, ease: EASE_STANDARD }}
        className="text-lead text-paper max-w-3xl"
      >
        I&apos;m a product designer and frontend engineer who builds
        interfaces the way well-set documentation reads — clear, considered,
        and never louder than it needs to be.
      </motion.p>
    </section>
  );
}
