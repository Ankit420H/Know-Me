"use client";

import Image from "next/image";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Card } from "@/components/ui/Card";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function Projects() {
    const [filter, setFilter] = useState("All");
    const [sort, setSort] = useState("Default");

    // Extract unique categories
    const categories = ["All", ...Array.from(new Set(portfolioData.projects.map(p => p.category)))];

    // Filter and Sort Logic
    const filteredProjects = useMemo(() => {
        let result = [...portfolioData.projects];

        if (filter !== "All") {
            result = result.filter(p => p.category === filter);
        }

        if (sort === "Name") {
            result.sort((a, b) => a.title.localeCompare(b.title));
        } else if (sort === "Tech") {
            result.sort((a, b) => a.tech.localeCompare(b.tech));
        }

        return result;
    }, [filter, sort]);

    return (
        <section className="py-24 px-6 border-t border-white/5" id="projects">
            <div className="max-w-5xl mx-auto space-y-12">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <h2 className="text-sm font-mono text-gray-500 uppercase tracking-widest">Selected Works</h2>

                    {/* Controls */}
                    <div className="flex flex-wrap items-center gap-4">
                        {/* Filter Tabs */}
                        <div className="flex items-center gap-2 p-1 bg-white/5 rounded-full overflow-x-auto no-scrollbar">
                            {categories.map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setFilter(cat)}
                                    className={cn(
                                        "px-4 py-1.5 rounded-full text-xs font-medium transition-all whitespace-nowrap",
                                        filter === cat
                                            ? "bg-white text-black shadow-lg"
                                            : "text-gray-400 hover:text-white hover:bg-white/5"
                                    )}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                        {/* Sort Dropdown (Simplified as a toggle for now) */}
                        <div className="flex items-center gap-2">
                            <span className="text-xs text-gray-500 font-mono hidden md:inline">Sort by:</span>
                            <select
                                value={sort}
                                onChange={(e) => setSort(e.target.value)}
                                className="bg-black border border-white/10 text-xs text-gray-300 rounded-md px-2 py-1.5 outline-none focus:border-white/30"
                            >
                                <option value="Default">Default</option>
                                <option value="Name">Name</option>
                                <option value="Tech">Tech Stack</option>
                            </select>
                        </div>
                    </div>
                </div>

                <motion.div layout className="grid md:grid-cols-2 gap-6">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <motion.a
                                layout
                                key={project.title}
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className="block group"
                            >
                                <Card className="h-full p-0 overflow-hidden flex flex-col bg-white/[0.02] border-white/5 hover:border-white/20 transition-all duration-300 hover:bg-white/[0.04]">
                                    <div className="relative h-48 w-full bg-white/5 group-hover:bg-white/10 transition-colors">
                                        <div className="absolute inset-0 flex items-center justify-center text-gray-600 font-mono text-xs">
                                            {project.image ? (
                                                <Image
                                                    src={project.image}
                                                    alt={project.title}
                                                    fill
                                                    className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                                                    sizes="(max-width: 768px) 100vw, 50vw"
                                                />
                                            ) : (
                                                "Image Placeholder"
                                            )}
                                        </div>
                                    </div>

                                    <div className="p-8 flex flex-col flex-grow justify-between space-y-6">
                                        <div className="flex justify-between items-start">
                                            <div className="space-y-2">
                                                <span className="text-xs font-mono text-gray-500">{project.category}</span>
                                                <h3 className="text-2xl font-bold text-white group-hover:text-gray-200 transition-colors">
                                                    {project.title}
                                                </h3>
                                            </div>
                                            <ArrowUpRight className="h-5 w-5 text-gray-600 group-hover:text-white transition-colors" />
                                        </div>

                                        <p className="text-gray-400 leading-relaxed text-sm">
                                            {project.description}
                                        </p>

                                        {project.metrics && project.metrics.length > 0 && (
                                            <div className="flex flex-wrap gap-2">
                                                {project.metrics.map((metric, i) => (
                                                    <span key={i} className="text-xs text-gray-500 border border-white/5 px-2 py-1 rounded">
                                                        {metric}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </Card>
                            </motion.a>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}
