import About from "@/app/components/About";
import { experience } from "@/data/experience";

export default function AboutPage() {
    return (
        <section className="py-24 space-y-12 max-w-3xl">
            <header>
                <h1 className="text-4xl font-bold mb-4">
                    About Me
                </h1>
            </header>

            {/* <About items={experience} /> */}
        </section>
    );
}
