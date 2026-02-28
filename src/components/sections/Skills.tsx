"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skillCategories } from "@/lib/data";
import SectionWrapper from "@/components/layout/SectionWrapper";

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <SectionWrapper id="skills" className="bg-card/20">
      <span className="text-sm font-mono text-primary tracking-wider uppercase">
        Skills
      </span>
      <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
        Technical arsenal<span className="text-primary">.</span>
      </h2>

      <div ref={ref} className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((category, catIndex) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 30 }}
            animate={
              isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.5, delay: catIndex * 0.1 }}
            className="p-6 rounded-2xl border border-border/50 bg-card/50 hover:bg-card hover:border-border transition-all"
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="text-2xl">{category.icon}</span>
              <h3 className="font-semibold text-foreground">
                {category.name}
              </h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={
                    isInView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.8 }
                  }
                  transition={{
                    duration: 0.3,
                    delay: catIndex * 0.1 + skillIndex * 0.03,
                  }}
                  className="text-xs font-mono px-3 py-1.5 rounded-lg bg-secondary/70 text-muted-foreground border border-border/30 hover:border-primary/40 hover:text-primary transition-colors cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
