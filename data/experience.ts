export interface Experience {
    company: string;
    role: string;
    period: string;
    description: string[];
}

export const experience: Experience[] = [
    {
        company: "Company Name",
        role: "Software Engineer",
        period: "2024 – Present",
        description: [
            "Built and maintained scalable internal tools using modern web technologies.",
            "Collaborated cross-functionally with designers and product managers.",
            "Improved performance and reliability through refactoring and testing.",
        ],
    },
    {
        company: "Previous Company / Internship",
        role: "Software Engineering Intern",
        period: "2023 – 2024",
        description: [
            "Developed features using React and TypeScript.",
            "Worked with APIs and backend services.",
            "Participated in code reviews and agile ceremonies.",
        ],
    },
];
