"use client";

import { motion } from "framer-motion";
import { Project } from "@/data/projects";

interface Props {
    project: Project;
}

export default function ProjectCard({ project }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            whileHover={{ y: -4 }}
            className="rounded-xl border border-muted p-6 transition-shadow hover:shadow-lg"
        >
            <h3 className="text-xl font-semibold mb-2">
                {project.title}
            </h3>

            <p className="text-muted-foreground mb-4">
                {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                    <span
                        key={tech}
                        className="rounded-full border px-3 py-1 text-sm"
                    >
                        {tech}
                    </span>
                ))}
            </div>

            {project.link && (
                <a
                    href={project.link}
                    target="_blank"
                    className="text-sm font-medium underline"
                >
                    View Repository
                </a>
            )}
        </motion.div>
    );
}
