import { Mail, Github, Linkedin } from "lucide-react";

export default function ContactPage() {
    return (
        <section className="py-24 max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">Get in Touch</h1>

            <p className="text-muted-foreground mb-12 text-lg">
                I’m always open to discussing new opportunities, interesting projects,
                or collaborations.
            </p>

            <div className="space-y-6">
                <a
                    href="mailto:YOUR_EMAIL_HERE"
                    className="flex items-center gap-4 p-4 rounded-xl border hover:bg-muted transition"
                >
                    <Mail className="w-5 h-5" />
                    <span>YOUR_EMAIL_HERE</span>
                </a>

                <a
                    href="https://github.com/hritheekkachinnakonda"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl border hover:bg-muted transition"
                >
                    <Github className="w-5 h-5" />
                    <span>GitHub</span>
                </a>

                <a
                    href="https://www.linkedin.com/in/YOUR_LINKEDIN"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl border hover:bg-muted transition"
                >
                    <Linkedin className="w-5 h-5" />
                    <span>LinkedIn</span>
                </a>
            </div>
        </section>
    );
}
