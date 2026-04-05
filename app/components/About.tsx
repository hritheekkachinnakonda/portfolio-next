"use client";

import { about } from "@/data/about";
import AboutCard from "./AboutCard";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="py-20">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-4xl font-bold mb-12 text-foreground text-center"
            >
                About Me
            </motion.h2>

            <div className="max-w-6xl mx-auto">
                {about.map((about, index) => (
                    <AboutCard key={index} about={about} />
                ))}
            </div>
        </section>
    );
}
