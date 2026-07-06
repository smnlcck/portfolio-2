"use client";

import { motion } from "framer-motion";
import { EASE_STANDARD, SPRING_POP, slideUp, staggerContainer, viewportOnce } from "@/lib/motion";

export default function CTABand() {
  return (
    <section className="bg-bg-deep px-6 md:px-16 py-30 md:py-50 flex flex-col items-center text-center">
      <motion.div
        variants={staggerContainer(0.075)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
      >
        <motion.h2
          variants={slideUp}
          transition={{ duration: 0.3, ease: EASE_STANDARD }}
          className="text-h2-lg text-paper max-w-2xl mx-auto"
        >
          Let&apos;s build something precise.
        </motion.h2>

        <motion.div variants={slideUp} transition={{ duration: 0.3, ease: EASE_STANDARD }} className="mt-10">
          <motion.a
            href="mailto:hello@example.com"
            whileHover={{ scale: 1.02, filter: "brightness(1.08)" }}
            whileTap={{ scale: 0.98 }}
            transition={SPRING_POP}
            className="inline-flex items-center gap-2 rounded-full bg-primary text-ink text-label px-6 py-3"
          >
            Get in touch
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
