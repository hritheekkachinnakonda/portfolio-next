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
                    My professional experience and the impact I’ve made in
                    engineering roles.
                </p>
            </header>

            <ExperienceTimeline items={experience} />
        </section>
    );
}
