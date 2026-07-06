"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { EASE_STANDARD, slideUp, staggerContainer, viewportOnce } from "@/lib/motion";

export type FeatureRowProps = {
  tag: string;
  heading: string;
  body: string;
  linkLabel: string;
  reverse?: boolean;
};

export default function FeatureRow({ tag, heading, body, linkLabel, reverse }: FeatureRowProps) {
  return (
    <motion.div
      className={`grid md:grid-cols-2 gap-14 md:gap-20 items-center px-6 md:px-16 py-20 md:py-30 ${
        reverse ? "md:[&>*:first-child]:order-2" : ""
      }`}
      variants={staggerContainer(0.075)}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
    >
      {/* image slot — flat, square corners, no shadow (hard rule 4) */}
      <motion.div
        variants={slideUp}
        transition={{ duration: 0.3, ease: EASE_STANDARD }}
        className="relative aspect-square w-full bg-white/5 border border-white/10"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(135deg, rgba(198,241,157,0.12) 0%, rgba(153,238,255,0.06) 45%, rgba(15,31,16,0) 100%)",
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center text-tiny font-mono text-white/25">
          project screenshot
        </div>
      </motion.div>

      {/* copy slot */}
      <div>
        <motion.span
          variants={slideUp}
          transition={{ duration: 0.3, ease: EASE_STANDARD }}
          className="inline-block rounded-full bg-tag-fill text-ink text-tiny font-mono uppercase px-3 py-1.5 mb-6"
        >
          {tag}
        </motion.span>

        <motion.h3
          variants={slideUp}
          transition={{ duration: 0.3, ease: EASE_STANDARD }}
          className="text-h3 text-paper mb-4"
        >
          {heading}
        </motion.h3>

        <motion.p
          variants={slideUp}
          transition={{ duration: 0.3, ease: EASE_STANDARD }}
          className="text-small text-white/60 max-w-md mb-6"
        >
          {body}
        </motion.p>

        <motion.a
          href="#"
          variants={slideUp}
          transition={{ duration: 0.3, ease: EASE_STANDARD }}
          className="inline-flex items-center gap-1.5 text-small text-link hover:underline w-fit"
        >
          {linkLabel}
          <ArrowRight size={14} strokeWidth={2} />
        </motion.a>
      </div>
    </motion.div>
  );
}
