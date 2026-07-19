"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal as TerminalIcon, X, Minus, Maximize2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface Command {
    input: string;
    output: string | React.ReactNode;
}

export function Terminal() {
    const [isOpen, setIsOpen] = useState(false);
    const [isMinimized, setIsMinimized] = useState(false);
    const [input, setInput] = useState("");
    const [history, setHistory] = useState<Command[]>([
        { input: "init", output: "Welcome to Ankit's Terminal. Type 'help' for commands." },
    ]);
    const inputRef = useRef<HTMLInputElement>(null);
    const bottomRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isOpen && !isMinimized) {
            inputRef.current?.focus();
            bottomRef.current?.scrollIntoView({ behavior: "smooth" });
        }
    }, [history, isOpen, isMinimized]);

    const handleCommand = (e: React.FormEvent) => {
        e.preventDefault();
        const cmd = input.trim().toLowerCase();
        let output: string | React.ReactNode = "";

        switch (cmd) {
            case "help":
                output = (
                    <div className="space-y-1">
                        <p>Available commands:</p>
                        <p className="text-blue-400">whoami</p>
                        <p className="text-blue-400">contact</p>
                        <p className="text-blue-400">stack</p>
                        <p className="text-blue-400">clear</p>
                        <p className="text-blue-400">sudo hire</p>
                    </div>
                );
                break;
            case "whoami":
                output = "Ankit Kumar Yadav. Full Stack Dev. Systems Architect. Caffeine Transducer.";
                break;
            case "contact":
                output = "Email: 2050yadavankit@gmail.com | GitHub: @Ankit420H";
                break;
            case "stack":
                output = "React, Next.js, TypeScript, Python, C++, AWS, Docker.";
                break;
            case "sudo hire":
                output = <span className="text-red-400">Access Denied: Please schedule a consultation first.</span>;
                break;
            case "clear":
                setHistory([]);
                setInput("");
                return;
            default:
                output = <span className="text-red-400">Command not found: {cmd}</span>;
        }

        setHistory([...history, { input: cmd, output }]);
        setInput("");
    };

    return (
        <>
            {/* Trigger Button */}
            {!isOpen && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="fixed bottom-6 right-6 z-50 p-4 glass shadow-[0_8px_32px_rgba(0,0,0,0.4)] rounded-full hover:border-white/20 transition-all duration-300 group"
                    onClick={() => setIsOpen(true)}
                >
                    <TerminalIcon className="w-5 h-5 text-[#a1a1a6] group-hover:text-white transition-colors" />
                </motion.button>
            )}

            {/* Terminal Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 40, scale: 0.9, filter: "blur(10px)" }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            scale: 1,
                            filter: "blur(0px)",
                            height: isMinimized ? "48px" : "380px",
                            width: isMinimized ? "240px" : "min(550px, 90vw)"
                        }}
                        exit={{ opacity: 0, y: 40, scale: 0.9, filter: "blur(10px)" }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className={cn(
                            "fixed bottom-6 right-6 z-50 glass-panel overflow-hidden flex flex-col font-mono text-[13px]",
                            isMinimized ? "" : ""
                        )}
                    >
                        {/* Header (Apple-like Mac Window Controls) */}
                        <div className="flex items-center justify-between px-4 py-3 bg-white/[0.02] border-b border-white/[0.05] cursor-pointer hover:bg-white/[0.04] transition-colors" onClick={() => setIsMinimized(!isMinimized)}>
                            <div className="flex items-center gap-2">
                                <div className="flex gap-1.5 mr-2">
                                    <button onClick={(e) => { e.stopPropagation(); setIsOpen(false); }} className="w-3 h-3 rounded-full bg-[#ff5f56] hover:bg-[#ff5f56]/80 transition-colors" />
                                    <button onClick={(e) => { e.stopPropagation(); setIsMinimized(!isMinimized); }} className="w-3 h-3 rounded-full bg-[#ffbd2e] hover:bg-[#ffbd2e]/80 transition-colors" />
                                    <button onClick={(e) => { e.stopPropagation(); setIsMinimized(false); }} className="w-3 h-3 rounded-full bg-[#27c93f] hover:bg-[#27c93f]/80 transition-colors" />
                                </div>
                                <TerminalIcon className="w-3.5 h-3.5 text-[#a1a1a6]" />
                                <span className="text-[11px] text-[#a1a1a6] font-medium tracking-wide">guest@ankit-os ~</span>
                            </div>
                        </div>

                        {/* Content */}
                        {!isMinimized && (
                            <div className="flex-1 p-5 overflow-y-auto space-y-3 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                                {history.map((entry, i) => (
                                    <div key={i} className="space-y-1.5">
                                        <div className="flex items-center gap-2 text-[#a1a1a6]">
                                            <span className="text-blue-500">➜</span>
                                            <span className="text-white">{entry.input}</span>
                                        </div>
                                        <div className="text-[#a1a1a6] pl-5 leading-relaxed font-light">{entry.output}</div>
                                    </div>
                                ))}

                                <form onSubmit={handleCommand} className="flex items-center gap-2 mt-3 pl-0.5">
                                    <span className="text-blue-500 font-bold">➜</span>
                                    <input
                                        ref={inputRef}
                                        type="text"
                                        value={input}
                                        onChange={(e) => setInput(e.target.value)}
                                        className="flex-1 bg-transparent border-none outline-none text-white placeholder-white/20 font-light"
                                        placeholder="Type a command..."
                                        autoFocus
                                    />
                                </form>
                                <div ref={bottomRef} />
                            </div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
