export interface Experience {
    company: string;
    role: string;
    period: string;
    description: string[];
}

export const experience: Experience[] = [
    {
        company: "CIBC",
        role: "Automation Engineer",
        period: "May 2024 – Present",
        description: [
            "Developing and optimizing Ansible automation for server build, patching, and decommissioning.",
            "Streamlining Windows and Linux server management to reduce manual effort and improve consistency.",
            "Managing code promotions via ServiceNow, ensuring controlled releases and incident resolution within SLAs.",
            "Collaborating with Network Security Engineering on firewall changes and Oracle RAC integrations.",
            "Maintaining database integrity by managing IP allocations through SQL Server, CyberArk, and HashiCorp Vault.",
            "Creating and updating technical documentation and runbooks to support audits and operational excellence.",
        ],
    },
    {
        company: "Blanc Labs",
        role: "IT Systems Administrator Co-op",
        period: "May 2023 – Aug 2023",
        description: [
            "Supported SOC 2 Type 2 audit initiatives, reducing security risks by 35% and saving over $10,000 in compliance costs.",
            "Optimized Azure and AWS services and resource usage, improving operational efficiency by 15%.",
            "Provided IT support across the organization, resolving 95% of tickets within SLAs and increasing system uptime by 10%.",
        ],
    },
    {
        company: "Handi-Care Intl.",
        role: "Web Developer Co-op",
        period: "May 2022 – Aug 2022",
        description: [
            "Redesigned and migrated the organization’s website to WordPress using PHP and MySQL, increasing web traffic by 140%.",
            "Created fundraising and marketing materials that helped raise over $25,000.",
            "Traveled to India to collaborate with OT/PT professionals and gather real-world content for the platform.",
        ],
    },
    {
        company: "Hoffmann-La Roche",
        role: "Pharma Technical Analyst Co-op",
        period: "May 2021 – Aug 2021",
        description: [
            "Implemented digital solutions and designed internal webpages using Google Sites, HTML, and CSS, increasing information sharing by 85%.",
            "Led bi-weekly Agile SCRUM meetings to drive team alignment and delivery.",
            "Leveraged Tableau to create data-driven insights supporting technical and business decisions.",
        ],
    },
];
