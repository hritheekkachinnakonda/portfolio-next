"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="min-h-[70vh] flex flex-col justify-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="space-y-6"
            >
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                    Hi, I’m{" "}
                    <span className="text-primary">
                        Hritheekka
                    </span>
                </h1>

                <p className="text-xl md:text-2xl font-medium text-muted-foreground">
                    Software Engineer
                </p>

                <p className="max-w-xl text-muted-foreground">
                    I build clean, scalable, and user-focused applications with
                    thoughtful architecture and modern tooling.
                </p>

                <div className="flex gap-4 pt-4">
                    <Link
                        href="/projects"
                        className="inline-flex items-center justify-center rounded-md bg-foreground text-background px-6 py-3 font-medium transition hover:opacity-90"
                    >
                        View Projects
                    </Link>

                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center rounded-md border border-foreground px-6 py-3 font-medium transition hover:bg-muted"
                    >
                        Contact Me
                    </Link>
                </div>
            </motion.div>
        </section>
    );
}
