"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export function Hero() {
    return (
        <section className="min-h-[100vh] flex flex-col justify-center px-6 relative overflow-hidden pt-20">
            {/* Ambient Background Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/[0.05] via-black to-black -z-10" />
            <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-500/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-purple-500/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />

            <div className="max-w-7xl mx-auto w-full space-y-12 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="space-y-8"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass shadow-lg">
                        <span className="h-1.5 w-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)] animate-pulse" />
                        <span className="text-[10px] font-mono text-[#a1a1a6] tracking-[0.2em] uppercase">
                            System Status: Optimized
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-8xl lg:text-[8rem] font-bold tracking-tighter leading-[0.95] text-white">
                        <span className="text-gradient block pb-2 drop-shadow-2xl">
                            {portfolioData.hero.headline}
                        </span>
                    </h1>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col md:flex-row gap-8 items-start md:items-center max-w-4xl"
                >
                    <p className="text-xl md:text-2xl text-[#a1a1a6] font-light leading-relaxed tracking-wide">
                        {portfolioData.hero.subtext}
                    </p>

                    <Button
                        size="lg"
                        className="rounded-full bg-white text-black hover:bg-gray-200 hover:scale-105 active:scale-95 transition-all duration-300 border-0 shrink-0 shadow-[0_0_40px_rgba(255,255,255,0.15)] px-8 h-14 text-sm tracking-wide font-medium"
                        onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        See the Work
                        <ArrowRight className="ml-3 h-4 w-4" />
                    </Button>
                </motion.div>
            </div>
        </section >
    );
}
