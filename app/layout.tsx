import "./globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "@/app/components/Navbar";

export const metadata = {
  title: "Hritheekka Chinnakonda | Automation Engineer",
  description:
    "An Engineer building clean, scalable, and user-focused applications with modern technologies.",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className="max-w-7xl mx-auto px-6 md:px-12">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
