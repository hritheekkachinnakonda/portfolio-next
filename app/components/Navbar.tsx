"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

const navItems = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "Experience", href: "/experience" },
    { label: "Contact", href: "/contact" },
];


export default function Navbar() {
    const pathname = usePathname();

    return (
        <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur border-b border-muted">
            <div className="flex items-center justify-between py-4 px-6 md:px-12 max-w-7xl mx-auto">
                <Link href="/" className="text-lg font-semibold">
                    HC
                </Link>

                <div className="flex items-center gap-6">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href;

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`text-sm transition ${isActive
                                    ? "font-semibold text-foreground"
                                    : "text-muted-foreground hover:text-foreground"
                                    }`}
                            >
                                {item.label}
                            </Link>
                        );
                    })}

                    <ThemeToggle />
                </div>
            </div>
        </nav>
    );
}
