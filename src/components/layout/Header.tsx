"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Download } from "lucide-react";

export function Header() {
    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed top-0 left-0 right-0 z-50 px-6 py-4 pointer-events-none"
        >
            <div className="max-w-7xl mx-auto flex justify-between items-center pointer-events-auto">
                {/* System Status */}
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/5">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <span className="text-xs font-mono text-gray-300 uppercase tracking-wider">
                        System: Online
                    </span>
                </div>

                {/* Steal My Resume */}
                <Button
                    variant="ghost"
                    size="sm"
                    className="group bg-black/50 backdrop-blur-md border border-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-all"
                    onClick={() => window.open("/resume.pdf", "_blank")}
                >
                    <span className="mr-2 font-mono text-xs uppercase tracking-wider group-hover:hidden">
                        Acquire Asset
                    </span>
                    <span className="mr-2 font-mono text-xs uppercase tracking-wider hidden group-hover:inline">
                        Steal Resume
                    </span>
                    <Download className="h-3 w-3" />
                </Button>
            </div>
        </motion.header>
    );
}
