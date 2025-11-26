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
                        <p className="text-green-400">whoami</p>
                        <p className="text-green-400">contact</p>
                        <p className="text-green-400">stack</p>
                        <p className="text-green-400">clear</p>
                        <p className="text-green-400">sudo hire</p>
                    </div>
                );
                break;
            case "whoami":
                output = "Ankit Kumar Yadav. Full Stack Dev. Robotics Enthusiast. Coffee Consumer.";
                break;
            case "contact":
                output = "Email: ankit@example.com | GitHub: @Ankit420H";
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
                    className="fixed bottom-6 right-6 z-50 p-3 bg-black border border-white/10 rounded-full shadow-2xl hover:border-green-500/50 transition-colors group"
                    onClick={() => setIsOpen(true)}
                >
                    <TerminalIcon className="w-5 h-5 text-gray-400 group-hover:text-green-400 transition-colors" />
                </motion.button>
            )}

            {/* Terminal Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{
                            opacity: 1,
                            y: isMinimized ? 0 : 0,
                            scale: 1,
                            height: isMinimized ? "auto" : "300px",
                            width: isMinimized ? "200px" : "min(500px, 90vw)"
                        }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className={cn(
                            "fixed bottom-6 right-6 z-50 bg-black/90 backdrop-blur-xl border border-white/10 rounded-lg shadow-2xl overflow-hidden flex flex-col font-mono text-sm",
                            isMinimized ? "h-12" : "h-[300px]"
                        )}
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between px-4 py-2 bg-white/5 border-b border-white/5 cursor-pointer" onClick={() => setIsMinimized(!isMinimized)}>
                            <div className="flex items-center gap-2">
                                <TerminalIcon className="w-3 h-3 text-green-500" />
                                <span className="text-xs text-gray-400">guest@ankit-portfolio ~</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <button onClick={(e) => { e.stopPropagation(); setIsMinimized(!isMinimized); }} className="hover:text-white text-gray-500">
                                    {isMinimized ? <Maximize2 className="w-3 h-3" /> : <Minus className="w-3 h-3" />}
                                </button>
                                <button onClick={(e) => { e.stopPropagation(); setIsOpen(false); }} className="hover:text-red-400 text-gray-500">
                                    <X className="w-3 h-3" />
                                </button>
                            </div>
                        </div>

                        {/* Content */}
                        {!isMinimized && (
                            <div className="flex-1 p-4 overflow-y-auto space-y-2 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                                {history.map((entry, i) => (
                                    <div key={i} className="space-y-1">
                                        <div className="flex items-center gap-2 text-gray-500">
                                            <span className="text-green-500">➜</span>
                                            <span>{entry.input}</span>
                                        </div>
                                        <div className="text-gray-300 pl-4 leading-relaxed">{entry.output}</div>
                                    </div>
                                ))}

                                <form onSubmit={handleCommand} className="flex items-center gap-2 mt-2">
                                    <span className="text-green-500">➜</span>
                                    <input
                                        ref={inputRef}
                                        type="text"
                                        value={input}
                                        onChange={(e) => setInput(e.target.value)}
                                        className="flex-1 bg-transparent border-none outline-none text-white placeholder-gray-600"
                                        placeholder="Type help..."
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
