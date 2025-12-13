"use client";

import { motion } from "framer-motion";
import { Experience } from "@/data/experience";

interface Props {
    items: Experience[];
}

export default function ExperienceTimeline({ items }: Props) {
    return (
        <div className="relative border-l border-muted pl-6 space-y-12">
            {items.map((item, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="relative"
                >
                    {/* Dot */}
                    <span className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-foreground" />

                    <div className="space-y-2">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                            <h3 className="text-lg font-semibold">
                                {item.role} · {item.company}
                            </h3>
                            <span className="text-sm text-muted-foreground">
                                {item.period}
                            </span>
                        </div>

                        <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                            {item.description.map((point, i) => (
                                <li key={i}>{point}</li>
                            ))}
                        </ul>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
