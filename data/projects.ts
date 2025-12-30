export type Project = {
    title: string;
    description: string;
    tech: string[];
    github?: string;
    demo?: string;
};

export const projects: Project[] = [
    {
        title: "AI-Powered Productivity App",
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
