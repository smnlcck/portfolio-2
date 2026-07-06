"use client";

import { useState } from "react";
import Preloader from "@/components/Preloader";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import FeatureRow from "@/components/FeatureRow";
import SkillsStrip from "@/components/SkillsStrip";
import CTABand from "@/components/CTABand";
import Footer from "@/components/Footer";

const FEATURES = [
  {
    tag: "Case Study",
    heading: "Design system for a fintech platform",
    body: "Unified a fragmented product into a single component library — tokens, patterns, and documentation used by three teams.",
    linkLabel: "Read the case study",
  },
  {
    tag: "Frontend Architecture",
    heading: "Rebuilding a dashboard for scale",
    body: "Migrated a legacy dashboard to a modern, type-safe frontend without a day of downtime for its largest customers.",
    linkLabel: "View the project",
    reverse: true,
  },
  {
    tag: "Product Design",
    heading: "Onboarding, simplified",
    body: "Reduced a nine-step signup flow to three, cutting drop-off by half through research-led iteration.",
    linkLabel: "See the process",
  },
  {
    tag: "Data Visualization",
    heading: "Making a year of data legible",
    body: "Designed and built a reporting suite that turns raw operational data into charts a non-technical audience trusts.",
    linkLabel: "Explore the work",
    reverse: true,
  },
];

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <Preloader onDone={() => setLoaded(true)} />}
      <main className="flex flex-col">
        <Hero />
        <Intro />
        <div id="work">
          {FEATURES.map((feature) => (
            <FeatureRow key={feature.heading} {...feature} />
          ))}
        </div>
        <SkillsStrip />
        <CTABand />
        <Footer />
      </main>
    </>
  );
}
