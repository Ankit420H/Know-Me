"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export function Experience() {
    return (
        <section className="py-32 px-6" id="experience">
            <div className="max-w-4xl mx-auto space-y-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col md:flex-row md:items-end justify-between gap-6"
                >
                    <div className="space-y-2">
                        <h2 className="text-sm font-mono text-gray-500 uppercase tracking-widest">Career History</h2>
                        <p className="text-4xl font-semibold tracking-tight text-white">Where I&apos;ve Built.</p>
                    </div>
                </motion.div>

                <div className="relative border-l border-white/10 ml-4 md:ml-0 space-y-12 pl-8 md:pl-0">
                    {portfolioData.experience.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative md:grid md:grid-cols-5 gap-8 items-start group"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute -left-[37px] md:left-auto md:right-full md:mr-8 top-2 w-3 h-3 rounded-full bg-white/20 ring-4 ring-black group-hover:bg-white transition-colors" />

                            <div className="md:col-span-1 pt-1">
                                <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">{exp.year}</span>
                            </div>

                            <div className="md:col-span-4 space-y-4">
                                <div>
                                    <h3 className="text-xl font-medium text-white group-hover:text-blue-400 transition-colors">{exp.role}</h3>
                                    <p className="text-gray-400">{exp.company}</p>
                                </div>

                                {exp.description && (
                                    <ul className="space-y-2">
                                        {exp.description.map((item, i) => (
                                            <li key={i} className="text-sm text-gray-500 leading-relaxed">
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
