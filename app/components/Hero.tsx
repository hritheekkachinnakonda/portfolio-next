"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import myPicture from "@/public/profile.png"; // replace with your image path

export default function Hero() {
    return (
        <section className="min-h-[70vh] flex items-center justify-center">
            <div className="flex flex-col md:flex-row items-center md:justify-between w-full max-w-6xl px-4 md:px-0 gap-8">
                {/* Left side: Text */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="space-y-6 md:w-1/2"
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

                {/* Right side: Picture */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="md:w-1/2 flex justify-center items-center"
                >
                    <div className="w-full aspect-square max-w-md md:max-w-full rounded-full overflow-hidden shadow-lg">
                        <Image
                            src={myPicture}
                            alt="Hritheekka"
                            className="object-cover w-full h-full"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
