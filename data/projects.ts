export interface Project {
    title: string;
    description: string;
    tech: string[];
    link?: string;
}

export const projects: Project[] = [
    {
        title: "AI Productivity App",
        description:
            "An AI-powered task management app that breaks down goals, schedules tasks intelligently, and adapts to user behavior.",
        tech: ["Flutter", "Firebase", "LangChain", "Mistral"],
        link: "https://github.com/your-repo",
    },
    {
        title: "Portfolio Website",
        description:
            "A modern, responsive portfolio built with Next.js, TypeScript, and Tailwind CSS.",
        tech: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    },
];
