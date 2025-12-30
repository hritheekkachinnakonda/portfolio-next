"use client";

import {
    motion,
    useMotionValue,
    useTransform,
    useInView,
} from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import myPicture from "@/public/profile.png";

export default function Hero() {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, margin: "-100px" });

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const rotateX = useTransform(mouseY, [-40, 40], [6, -6]);
    const rotateY = useTransform(mouseX, [-40, 40], [-6, 6]);

    function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
        if (window.innerWidth < 768) return; // disable parallax on mobile

        const rect = e.currentTarget.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left - rect.width / 2);
        mouseY.set(e.clientY - rect.top - rect.height / 2);
    }

    function handleMouseLeave() {
        mouseX.set(0);
        mouseY.set(0);
    }

    return (
        <section
            ref={containerRef}
            className="min-h-[70vh] flex items-center justify-center"
        >
            <div className="flex flex-col md:flex-row items-center md:justify-between w-full max-w-6xl px-4 md:px-0 gap-12">
                {/* Left side */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="space-y-6 md:w-1/2"
                >
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        Hi, I’m{" "}
                        <span className="text-primary">Hritheekka</span>
                    </h1>

                    <p className="text-xl md:text-2xl font-medium text-muted-foreground">
                        Engineer
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

                {/* Right side */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    className="md:w-1/2 flex justify-center items-center"
                >
                    <div className="relative">
                        {/* Blurred glow */}
                        <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl scale-110" />

                        <motion.div
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                            style={{
                                rotateX,
                                rotateY,
                                transformStyle: "preserve-3d",
                            }}
                            whileHover={{ scale: 1.03 }}
                            className="-translate-y-6 w-60 md:w-64 aspect-square
                                       rounded-full overflow-hidden shadow-xl
                                       ring-1 ring-primary/30
                                       hover:ring-primary/60
                                       transition-all duration-300
                                       relative bg-background"
                        >
                            <Image
                                src={myPicture}
                                alt="Hritheekka"
                                className="object-cover w-full h-full"
                                priority
                            />
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
