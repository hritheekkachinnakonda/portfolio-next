"use client";

import { ExternalLink, Github } from "lucide-react";
import { Project } from "@/data/projects";
import { motion } from "framer-motion";

type Props = {
    project: Project;
};

export default function ProjectCard({ project }: Props) {
    return (
        <motion.div
            whileHover={{
                y: -6,
                scale: 1.02,
            }}
            transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
            }}
            className="rounded-2xl border p-6 bg-background"
        >
            {/* Title */}
            <h3 className="text-xl font-semibold mb-2">
                {project.title}
            </h3>

            {/* Description */}
            <p className="text-muted-foreground mb-4">
                {project.description}
            </p>

            {/* Tech / Skills */}
            <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                    <motion.span
                        key={tech}
                        whileHover={{ scale: 1.08, y: -2 }}
                        transition={{ type: "spring", stiffness: 400, damping: 15 }}
                        className="
              text-xs font-semibold
              px-3 py-1
              rounded-lg
              border
              bg-muted/40
              text-foreground
              cursor-default
            "
                    >
                        {tech}
                    </motion.span>
                ))}
            </div>

            {/* Links */}
            <div className="flex gap-4">
                {project.github && (
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm hover:underline"
                    >
                        <Github size={16} />
                        Code
                    </a>
                )}

                {project.demo && (
                    <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm hover:underline"
                    >
                        <ExternalLink size={16} />
                        Live
                    </a>
                )}
            </div>
        </motion.div>
    );
}
