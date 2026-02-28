"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Lightbulb, Rocket } from "lucide-react";
import SectionWrapper from "@/components/layout/SectionWrapper";

const highlights = [
  {
    icon: Code2,
    title: "Full Stack Development",
    description:
      "I build complete web applications from frontend to backend using the MERN stack and Next.js, focusing on clean code and a great user experience.",
  },
  {
    icon: Lightbulb,
    title: "AI Integration",
    description:
      "I integrate AI APIs like Gemini into real applications — from receipt extraction in SmartFi.AI to content generation in Promptly AI.",
  },
  {
    icon: Rocket,
    title: "Ship & Iterate",
    description:
      "I focus on building and deploying real projects. Every app I build is live, functional, and demonstrates practical problem solving.",
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <SectionWrapper id="about">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* Left column — narrative */}
        <div>
          <span className="text-sm font-mono text-primary tracking-wider uppercase">
            About
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
            Engineering products,
            <br />
            not just features<span className="text-primary">.</span>
          </h2>
          <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I&apos;m a full stack developer currently pursuing B.Tech in
              Computer Science (Data Science &amp; AI) at Shri Ramswaroop
              Memorial University, Lucknow. I work primarily with the MERN
              stack and Next.js to build and ship real-world web applications.
            </p>
            <p>
              I enjoy integrating AI into my projects — whether it&apos;s using
              Gemini API for financial insights in SmartFi.AI, building
              AI-powered content generation with Promptly AI, or implementing
              real-time features with WebSockets in ChatConnect.
            </p>
            <p>
              I also hold IBM Data Analytics certifications in SPSS Modeller,
              Watson Studio, and IBM Cognos, giving me a solid foundation in
              data analysis alongside my development skills.
            </p>
          </div>
        </div>

        {/* Right column — highlight cards */}
        <div ref={ref} className="space-y-4">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: 30 }}
              animate={
                isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }
              }
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group p-6 rounded-2xl border border-border/50 bg-card/50 hover:bg-card hover:border-border transition-all hover:shadow-lg hover:shadow-black/5"
            >
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-primary/10 text-primary shrink-0">
                  <item.icon size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
