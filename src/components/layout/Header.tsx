"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Download } from "lucide-react";

export function Header() {
    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 left-0 right-0 z-50 px-6 py-6 pointer-events-none"
        >
            <div className="max-w-7xl mx-auto flex justify-between items-center pointer-events-auto">
                {/* System Status - Glass Pill */}
                <div className="flex items-center gap-3 px-4 py-2 rounded-full glass shadow-[0_4px_16px_rgba(0,0,0,0.2)]">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <span className="text-[11px] font-mono text-[#a1a1a6] uppercase tracking-[0.2em] font-semibold">
                        System: Online
                    </span>
                </div>

                {/* Steal My Resume - Glass Button */}
                <Button
                    variant="ghost"
                    size="sm"
                    className="group glass glass-hover text-[#a1a1a6] hover:text-white transition-all duration-300 rounded-full px-5 py-2 h-auto"
                    onClick={() => window.open("/resume.pdf", "_blank")}
                >
                    <span className="mr-2 font-mono text-[11px] uppercase tracking-[0.2em] font-semibold group-hover:hidden transition-all">
                        Acquire Asset
                    </span>
                    <span className="mr-2 font-mono text-[11px] uppercase tracking-[0.2em] font-semibold hidden group-hover:inline transition-all">
                        Steal Resume
                    </span>
                    <Download className="h-3.5 w-3.5" />
                </Button>
            </div>
        </motion.header>
    );
}
