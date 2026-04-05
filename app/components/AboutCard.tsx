"use client";

import { ExternalLink, Github } from "lucide-react";
import { About } from "@/data/about";
import { motion } from "framer-motion";

type Props = {
    about: About;
};

export default function AboutCard({ about }: Props) {
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
            className="w-full rounded-2xl bg-muted/40 p-6 bg-background"
        >

            {/* Description */}
            {/* <p className="text-muted-foreground mb-4">
                {about.description}
            </p> */}

            <section className="mt-16">
                {/* <div className="max-w-4xl mx-auto px-6">
                    <motion.div className="rounded-2xl bg-background p-8"> */}
                <p className="text-muted-foreground">
                    {about.description}
                </p>
                {/* </motion.div> */}
                {/* </div > */}
            </section >

        </motion.div >
    );
}
