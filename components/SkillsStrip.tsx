"use client";

import { motion } from "framer-motion";
import { EASE_STANDARD, slideUp, staggerContainer, viewportOnce } from "@/lib/motion";

const SKILLS = [
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Framer Motion",
  "Node.js",
  "GraphQL",
  "PostgreSQL",
  "Figma",
  "Design Systems",
  "Docker",
  "AWS",
];

export default function SkillsStrip() {
  return (
    <section className="bg-bg-dark px-6 md:px-16 py-20 md:py-30 border-t border-white/10">
      <motion.p
        variants={slideUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        transition={{ duration: 0.3, ease: EASE_STANDARD }}
        className="text-label text-white/40 font-mono uppercase mb-8"
      >
        Stack
      </motion.p>

      <motion.div
        className="flex flex-wrap gap-3"
        variants={staggerContainer(0.05)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
      >
        {SKILLS.map((skill) => (
          <motion.span
            key={skill}
            variants={slideUp}
            transition={{ duration: 0.3, ease: EASE_STANDARD }}
            className="rounded-full border border-white/15 text-small font-mono text-white/70 px-4 py-2"
          >
            {skill}
          </motion.span>
        ))}
      </motion.div>
    </section>
  );
}
