import ExperienceTimeline from "@/app/components/ExperienceTimeline";
import { experience } from "@/data/experience";

export default function ExperiencePage() {
    return (
        <section className="py-24 space-y-12 max-w-3xl">
            <header>
                <h1 className="text-4xl font-bold mb-4">
                    Experience
                </h1>
                <p className="text-muted-foreground">
                    My journey through development, automation, and innovative technologies.
                </p>
            </header>

            <ExperienceTimeline items={experience} />
        </section>
    );
}
