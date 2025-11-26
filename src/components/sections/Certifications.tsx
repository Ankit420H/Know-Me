"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Card } from "@/components/ui/Card";
import { Award, ArrowUpRight } from "lucide-react";

export function Certifications() {
    return (
        <section className="py-24 px-6 border-t border-white/5">
            <div className="max-w-4xl mx-auto space-y-12">
                <div className="flex items-center justify-between">
                    <h2 className="text-sm font-mono text-gray-500 uppercase tracking-widest">Credentials</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                    {portfolioData.certifications.map((cert, index) => (
                        <motion.a
                            key={index}
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="block group"
                        >
                            <Card className="p-6 h-full flex flex-col justify-between bg-white/[0.02] border-white/5 hover:border-white/20 hover:bg-white/[0.04] transition-all duration-300">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="p-2 rounded-lg bg-white/5 text-gray-400 group-hover:text-white transition-colors">
                                        <Award className="h-5 w-5" />
                                    </div>
                                    <ArrowUpRight className="h-4 w-4 text-gray-600 group-hover:text-white transition-colors" />
                                </div>

                                <div>
                                    <h3 className="font-medium text-white group-hover:text-gray-200 transition-colors mb-1">
                                        {cert.title}
                                    </h3>
                                    <p className="text-xs text-gray-500 font-mono">
                                        {cert.issuer} • {cert.date}
                                    </p>
                                </div>
                            </Card>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
