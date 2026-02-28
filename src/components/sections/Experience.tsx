"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";
import { experiences } from "@/lib/data";
import SectionWrapper from "@/components/layout/SectionWrapper";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <SectionWrapper id="experience" className="bg-card/20">
      <span className="text-sm font-mono text-primary tracking-wider uppercase">
        Experience
      </span>
      <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
        Where I&apos;ve made impact<span className="text-primary">.</span>
      </h2>

      <div ref={ref} className="mt-12 relative">
        {/* Timeline line */}
        <div className="absolute left-[22px] top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-border to-transparent hidden md:block" />

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={`${exp.company}-${exp.role}`}
              initial={{ opacity: 0, y: 30 }}
              animate={
                isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative md:pl-16"
            >
              {/* Timeline dot */}
              <div className="absolute left-3 top-6 w-3 h-3 rounded-full bg-primary shadow-lg shadow-primary/30 hidden md:block" />

              <div className="p-6 rounded-2xl border border-border/50 bg-card/50 hover:bg-card hover:border-border transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {exp.role}
                    </h3>
                    <p className="text-sm text-primary flex items-center gap-2">
                      <Briefcase size={14} />
                      {exp.company}
                    </p>
                  </div>
                  <span className="text-xs font-mono text-muted-foreground bg-secondary/50 px-3 py-1 rounded-full whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>

                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>

                <ul className="mt-4 space-y-2">
                  {exp.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="text-sm text-muted-foreground flex items-start gap-2"
                    >
                      <span className="text-primary mt-1.5 shrink-0">▹</span>
                      {highlight}
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-primary/10 text-primary border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
