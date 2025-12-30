import ProjectCard from "@/app/components/ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
    return (
        <section className="py-24 max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold mb-12">Projects</h1>

            <div className="grid md:grid-cols-2 gap-8">
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
