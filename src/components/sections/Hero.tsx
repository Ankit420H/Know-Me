"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export function Hero() {
    return (
        <section className="min-h-[90vh] flex flex-col justify-center px-6 relative overflow-hidden">
            <div className="max-w-5xl mx-auto w-full space-y-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-6"
                >
                    <span className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-gray-400 tracking-wider uppercase">
                        System Status: Optimized
                    </span>

                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9] text-white">
                        {portfolioData.hero.headline}
                    </h1>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-col md:flex-row gap-8 items-start md:items-center max-w-3xl"
                >
                    <p className="text-xl text-gray-400 font-light leading-relaxed">
                        {portfolioData.hero.subtext}
                    </p>

                    <Button
                        size="lg"
                        className="rounded-full bg-white text-black hover:bg-gray-200 border-0 shrink-0"
                        onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        See the Work
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </motion.div>
            </div>
        </section >
    );
}
