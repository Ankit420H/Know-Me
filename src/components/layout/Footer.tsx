"use client";

import { portfolioData } from "@/data/portfolio";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
    return (
        <footer className="py-12 px-6 border-t border-white/5 bg-black/20 backdrop-blur-sm">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <p className="text-sm text-gray-500">
                        © {new Date().getFullYear()} {portfolioData.personal.name}
                    </p>
                    <p className="text-xs text-gray-600 mt-1">
                        Built with Next.js, Tailwind & Caffeine.
                    </p>
                </div>

                <div className="flex items-center gap-6">
                    <a
                        href={portfolioData.personal.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-white transition-colors"
                    >
                        <Github className="w-5 h-5" />
                    </a>
                    <a
                        href={portfolioData.personal.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-white transition-colors"
                    >
                        <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                        href={`mailto:${portfolioData.personal.email}`}
                        className="text-gray-500 hover:text-white transition-colors"
                    >
                        <Mail className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </footer>
    );
}
