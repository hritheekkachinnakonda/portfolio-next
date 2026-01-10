export type Project = {
    title: string;
    description: string;
    tech: string[];
    github?: string;
    demo?: string;
    report?: string;
};

export const projects: Project[] = [
    {
        title: "Real-Time ASL to Speech Translator",
        description:
            "Designed and implemented a near real-time American Sign Language to speech translator using a custom machine learning pipeline, enabling accessible communication through speech synthesis APIs.",
        tech: [
            "Python",
            "11Labs API",
            "Raspberry Pi",
        ],
        // \report: "",
    },
    {
        title: "AI-Powered Productivity App (In Progress)",
        description:
            "Designed and built an AI-driven mobile app that converts high-level goals into actionable, scheduled tasks using local LLMs and real-time sync.",
        tech: [
            "Flutter",
            "Dart",
            "Firebase",
            "LangChain",
            "Mistral 7B",
        ],
        github: "https://github.com/your-repo",
    },
    {
        title: "Personal Portfolio Website",
        description:
            "Modern, responsive portfolio built with Next.js and Framer Motion, featuring dark mode, smooth animations, and optimized performance.",
        tech: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Framer Motion",
            "Vercel",
        ],
        github: "https://github.com/hritheekkachinnakonda",
        demo: "https://hritheekkachinnakonda.vercel.app",
    },
];
