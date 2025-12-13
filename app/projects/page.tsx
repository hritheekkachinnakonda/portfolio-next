import ProjectCard from "@/app/components/ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
    return (
        <section className="py-24 space-y-12">
            <header className="max-w-2xl">
                <h1 className="text-4xl font-bold mb-4">
                    Projects
                </h1>
                <p className="text-muted-foreground">
                    A selection of projects that highlight my approach to
                    problem-solving, architecture, and modern development.
                </p>
            </header>

            <div className="grid gap-8 md:grid-cols-2">
                {projects.map((project) => (
                    <ProjectCard
                        key={project.title}
                        project={project}
                    />
                ))}
            </div>
        </section>
    );
}
