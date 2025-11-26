"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { portfolioData } from "@/data/portfolio";

export function DeveloperSnapshot() {
    return (
        <section className="py-24 px-6 border-t border-white/5">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col md:flex-row items-center gap-12"
                >
                    <div className="relative w-64 h-64 shrink-0 grayscale hover:grayscale-0 transition-all duration-500">
                        <Image
                            src="/images/me.png"
                            alt={portfolioData.personal.name}
                            fill
                            className="rounded-2xl object-cover"
                        />
                    </div>

                    <div className="space-y-6 text-center md:text-left">
                        <h2 className="text-sm font-mono text-gray-500 uppercase tracking-widest">The Operator</h2>
                        <p className="text-3xl md:text-4xl font-light leading-tight text-white">
                            &quot;{portfolioData.about.philosophy}&quot;
                        </p>
                        <div className="space-y-4">
                            <p className="text-lg text-gray-300 leading-relaxed">
                                &quot;{portfolioData.personal.bio}&quot;
                            </p>
                        </div>
                        <div className="h-px w-20 bg-white/20 mx-auto md:mx-0" />
                        <p className="text-gray-400 font-mono text-sm">
                            {portfolioData.personal.title}
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
