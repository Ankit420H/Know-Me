"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export function About() {
    return (
        <section className="py-24 px-6" id="about">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="grid md:grid-cols-2 gap-12 items-start"
                >
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold">About</h2>
                        <div className="h-1 w-20 bg-primary rounded-full" />
                        <p className="text-2xl font-light leading-relaxed text-gray-200">
                            &quot;{portfolioData.about.philosophy}&quot;
                        </p>
                    </div>

                    <div className="space-y-8">
                        <p className="text-lg text-gray-400 leading-relaxed">
                            {portfolioData.about.background}
                        </p>

                        <div className="space-y-4">
                            <h3 className="text-xl font-bold text-white">Skills</h3>
                            <div className="flex flex-wrap gap-2">
                                {[
                                    ...portfolioData.skills.languages,
                                    ...portfolioData.skills.frontend,
                                    ...portfolioData.skills.backend,
                                    ...portfolioData.skills.tools,
                                    ...portfolioData.skills.competencies
                                ].map((skill) => (
                                    <span key={skill} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 hover:text-primary hover:border-primary/50 transition-colors">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-xl font-bold text-white">Education</h3>
                            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <h4 className="font-bold text-white">{portfolioData.education.degree}</h4>
                                        <p className="text-sm text-gray-400">{portfolioData.education.university}</p>
                                    </div>
                                    <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">
                                        {portfolioData.education.year}
                                    </span>
                                </div>
                                <p className="text-sm text-gray-500">{portfolioData.education.location} • CGPA: {portfolioData.education.cgpa}</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
