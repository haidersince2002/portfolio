"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { projects, type Project } from "@/lib/data";
import SectionWrapper from "@/components/layout/SectionWrapper";

const categories = [
  { key: "all", label: "All" },
  { key: "fullstack", label: "Full Stack" },
  { key: "ai", label: "AI/ML" },
  { key: "frontend", label: "Frontend" },
] as const;

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group glow-card rounded-2xl border border-border/50 bg-card/50 hover:bg-card hover:border-border transition-all overflow-hidden"
    >
      {/* Project image / placeholder */}
      <div className="relative h-48 bg-gradient-to-br from-primary/20 via-accent/10 to-secondary overflow-hidden">
        <div className="absolute inset-0 bg-grid-bg opacity-30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-4xl font-bold text-primary/30 font-mono">
            {project.title
              .split(" ")
              .map((w) => w[0])
              .join("")}
          </span>
        </div>
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-primary/80 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors backdrop-blur-sm"
              aria-label="Live demo"
            >
              <ExternalLink size={18} />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors backdrop-blur-sm"
              aria-label="GitHub repo"
            >
              <Github size={18} />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <ArrowRight
            size={16}
            className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all"
          />
        </div>

        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
          {project.description}
        </p>

        {/* Highlights */}
        <ul className="mt-4 space-y-1.5">
          {project.highlights.map((h) => (
            <li
              key={h}
              className="text-xs text-muted-foreground flex items-start gap-2"
            >
              <span className="text-accent mt-0.5 shrink-0">●</span>
              {h}
            </li>
          ))}
        </ul>

        {/* Tech tags */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-[10px] font-mono px-2 py-0.5 rounded bg-secondary/70 text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState<string>("all");

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <SectionWrapper id="projects">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
        <div>
          <span className="text-sm font-mono text-primary tracking-wider uppercase">
            Projects
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
            Featured work<span className="text-primary">.</span>
          </h2>
        </div>

        {/* Filter tabs */}
        <div className="flex gap-1 p-1 rounded-xl bg-secondary/50 border border-border/50">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setFilter(cat.key)}
              className={`px-4 py-1.5 text-xs font-medium rounded-lg transition-all ${
                filter === cat.key
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
}
