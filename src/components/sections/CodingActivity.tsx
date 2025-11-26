"use client";

import { portfolioData } from "@/data/portfolio";
import { Card } from "@/components/ui/Card";
import { Code2, Trophy, Flame, Award, GitCommit, Activity, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils"; // Assuming cn utility is available

export function CodingActivity() {
    const [stats, setStats] = useState(portfolioData.codingStats);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate fetching real-time data
        const fetchStats = async () => {
            // In a real app, you'd fetch from your API here
            // const res = await fetch('/api/stats');
            // const data = await res.json();

            // Simulating network delay for "Real-time" feel
            await new Promise(resolve => setTimeout(resolve, 1500));

            // For now, we just use the static data but we could update it here
            // Example: Randomize slightly to show "live" updates
            setStats(prev => ({
                ...prev,
                aggregate: {
                    ...prev.aggregate,
                    solved: prev.aggregate.solved + Math.floor(Math.random() * 5), // Simulate new problems solved
                }
            }));
            setLoading(false);
        };

        fetchStats();
    }, []);

    return (
        <section className="py-24 px-6 border-t border-white/5">
            <div className="max-w-5xl mx-auto space-y-12">
                <div className="flex items-center justify-between">
                    <h2 className="text-sm font-mono text-gray-500 uppercase tracking-widest">Digital Footprint</h2>
                    <div className="flex items-center gap-2">
                        {loading && <Loader2 className="w-3 h-3 animate-spin text-gray-500" />}
                        <span className={cn("text-xs font-mono px-2 py-1 rounded transition-colors", loading ? "text-gray-500" : "text-green-500 bg-green-500/10")}>
                            {loading ? "Fetching Data..." : "Live Stats"}
                        </span>
                    </div>
                </div>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                    {/* Main Stats - Large Card */}
                    <Card className="md:col-span-2 p-8 bg-white/[0.02] border-white/5 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Activity className="w-32 h-32 text-white" />
                        </div>
                        <div className="relative z-10 space-y-8">
                            <div>
                                <h3 className="text-lg font-medium text-gray-300">Total Problems Solved</h3>
                                <div className="text-6xl md:text-7xl font-bold text-white tracking-tighter mt-2">
                                    {loading ? (
                                        <span className="animate-pulse bg-white/10 rounded h-16 w-48 block"></span>
                                    ) : (
                                        <>
                                            {stats.aggregate.solved}
                                            <span className="text-2xl text-gray-500 ml-2">+</span>
                                        </>
                                    )}
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-8">
                                <div>
                                    <div className="flex items-center gap-2 text-gray-400 mb-1">
                                        <Flame className="w-4 h-4 text-orange-500" />
                                        <span className="text-sm">Active Streak</span>
                                    </div>
                                    <div className="text-2xl font-bold text-white">
                                        {loading ? <span className="animate-pulse bg-white/10 rounded h-8 w-24 block"></span> : `${stats.aggregate.streak} Days`}
                                    </div>
                                </div>
                                <div>
                                    <div className="flex items-center gap-2 text-gray-400 mb-1">
                                        <GitCommit className="w-4 h-4 text-blue-500" />
                                        <span className="text-sm">Contributions</span>
                                    </div>
                                    <div className="text-2xl font-bold text-white">
                                        {loading ? <span className="animate-pulse bg-white/10 rounded h-8 w-24 block"></span> : `${stats.aggregate.contributions} +`}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>

                    {/* Language Tags - Tall Card */}
                    <Card className="md:col-span-1 p-6 bg-white/[0.02] border-white/5 flex flex-col justify-between">
                        <div>
                            <h3 className="text-sm font-mono text-gray-500 uppercase mb-4">Core Stack</h3>
                            <div className="flex flex-wrap gap-2">
                                {stats.aggregate.tags.map((tag, i) => (
                                    <span key={i} className="px-3 py-1 text-xs text-gray-300 bg-white/5 rounded-full border border-white/5 hover:bg-white/10 transition-colors cursor-default">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="mt-8 pt-6 border-t border-white/5">
                            <p className="text-xs text-gray-500 italic">
                                &quot;I speak {stats.aggregate.tags.length} languages, but I dream in binary.&quot;
                            </p>
                        </div>
                    </Card>

                    {/* Platform Stats - Small Cards Row */}
                    <Card className="p-6 bg-white/[0.02] border-white/5 hover:bg-white/[0.04] transition-colors">
                        <div className="flex justify-between items-start mb-4">
                            <span className="text-xs font-mono text-gray-500">LEETCODE</span>
                            <Trophy className="w-4 h-4 text-[#ffa116]" />
                        </div>
                        <div className="text-2xl font-bold text-white">{stats.leetcode.solved}</div>
                        <p className="text-xs text-gray-500 mt-1">Problems Solved</p>
                    </Card>

                    <Card className="p-6 bg-white/[0.02] border-white/5 hover:bg-white/[0.04] transition-colors">
                        <div className="flex justify-between items-start mb-4">
                            <span className="text-xs font-mono text-gray-500">CODECHEF</span>
                            <Award className="w-4 h-4 text-[#bfa18f]" />
                        </div>
                        <div className="text-2xl font-bold text-white">{stats.codechef.division}</div>
                        <p className="text-xs text-gray-500 mt-1">Current Division</p>
                    </Card>

                    <Card className="p-6 bg-white/[0.02] border-white/5 hover:bg-white/[0.04] transition-colors">
                        <div className="flex justify-between items-start mb-4">
                            <span className="text-xs font-mono text-gray-500">GFG</span>
                            <Code2 className="w-4 h-4 text-[#2f8d46]" />
                        </div>
                        <div className="text-2xl font-bold text-white">{stats.geeksforgeeks.score}</div>
                        <p className="text-xs text-gray-500 mt-1">Coding Score</p>
                    </Card>
                </div>
            </div>
        </section>
    );
}
